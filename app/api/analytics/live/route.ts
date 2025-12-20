import { NextRequest } from 'next/server';
import {
  addLiveVisitor,
  removeLiveVisitor,
  readLiveVisitors,
  cleanupStaleLiveVisitors,
} from '@/lib/analytics-storage';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  console.log('[API Live] GET /api/analytics/live called');
  console.log('[API Live] Environment:', {
    isVercel: !!process.env.VERCEL,
    isNetlify: !!process.env.NETLIFY,
    nodeEnv: process.env.NODE_ENV,
  });

  try {
    const cookieStore = await cookies();
    const visitorCookie = cookieStore.get('visitor_session');
    
    console.log('[API Live] Visitor cookie exists?', !!visitorCookie?.value);
    
    if (!visitorCookie?.value) {
      console.log('[API Live] No session cookie, returning 400');
      return new Response('Session required', { status: 400 });
    }

    const sessionId = visitorCookie.value;
    console.log('[API Live] Session ID:', sessionId.substring(0, 20) + '...');

    // Create a readable stream for SSE
    const stream = new ReadableStream({
      async start(controller) {
        let interval: NodeJS.Timeout | null = null;
        
        try {
          console.log('[API Live] Setting up SSE stream for session:', sessionId.substring(0, 20) + '...');
          
          // Add visitor to live list
          console.log('[API Live] Adding visitor to live list...');
          addLiveVisitor(sessionId);
          cleanupStaleLiveVisitors();

          // Send initial data
          const liveCount = readLiveVisitors().length;
          const data = JSON.stringify({ liveVisitors: liveCount });
          console.log('[API Live] Sending initial data. Live visitors:', liveCount);
          controller.enqueue(`data: ${data}\n\n`);

          // Set up interval to send updates
          interval = setInterval(() => {
            try {
              cleanupStaleLiveVisitors();
              const liveCount = readLiveVisitors().length;
              const data = JSON.stringify({ liveVisitors: liveCount });
              console.log('[API Live] Sending update. Live visitors:', liveCount);
              controller.enqueue(`data: ${data}\n\n`);
            } catch (error) {
              console.error('[API Live] Error in SSE interval:', error);
              if (interval) clearInterval(interval);
              controller.close();
            }
          }, 5000); // Update every 5 seconds

          // Clean up on client disconnect
          request.signal.addEventListener('abort', () => {
            console.log('[API Live] Client disconnected, cleaning up...');
            if (interval) clearInterval(interval);
            removeLiveVisitor(sessionId);
            try {
              controller.close();
            } catch (e) {
              // Ignore errors on close
            }
          });
        } catch (error) {
          console.error('[API Live] Error in SSE stream:', error);
          if (interval) clearInterval(interval);
          removeLiveVisitor(sessionId);
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
        'X-Accel-Buffering': 'no',
      },
    });
  } catch (error) {
    console.error('[API Live] Error setting up SSE:', error);
    console.error('[API Live] Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack',
    });
    return new Response('Internal Server Error', { status: 500 });
  }
}

