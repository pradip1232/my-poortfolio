import { NextRequest, NextResponse } from 'next/server';
import { addVisitor } from '@/lib/analytics-storage';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  console.log('[API Track] POST /api/analytics/track called');
  console.log('[API Track] Environment:', {
    isVercel: !!process.env.VERCEL,
    isNetlify: !!process.env.NETLIFY,
    nodeEnv: process.env.NODE_ENV,
  });

  try {
    const cookieStore = await cookies();
    const visitorCookie = cookieStore.get('visitor_session');
    
    console.log('[API Track] Visitor cookie exists?', !!visitorCookie?.value);
    
    let sessionId: string;
    
    if (visitorCookie?.value) {
      sessionId = visitorCookie.value;
      console.log('[API Track] Existing visitor session:', sessionId.substring(0, 20) + '...');
    } else {
      // Generate new session ID
      sessionId = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
      console.log('[API Track] New visitor session created:', sessionId.substring(0, 20) + '...');
      
      // Set cookie (expires in 1 year)
      const response = NextResponse.json({ success: true, sessionId, counted: true });
      response.cookies.set('visitor_session', sessionId, {
        maxAge: 365 * 24 * 60 * 60,
        httpOnly: false,
        sameSite: 'lax',
        path: '/',
      });
      
      console.log('[API Track] Cookie set, tracking new visitor');
      // Track new visitor
      addVisitor(sessionId);
      
      return response;
    }

    // Existing visitor - check if we should count again
    // We only count once per day per session
    const today = new Date().toISOString().split('T')[0];
    const lastVisitCookie = cookieStore.get(`last_visit_${today}`);
    
    console.log('[API Track] Today:', today, 'Last visit cookie exists?', !!lastVisitCookie);
    
    if (!lastVisitCookie) {
      // First visit today for this session
      console.log('[API Track] First visit today, counting visitor');
      addVisitor(sessionId);
      
      const response = NextResponse.json({ success: true, sessionId, counted: true });
      response.cookies.set(`last_visit_${today}`, 'true', {
        maxAge: 24 * 60 * 60, // 24 hours
        httpOnly: false,
        sameSite: 'lax',
        path: '/',
      });
      
      console.log('[API Track] Visitor counted, returning response');
      return response;
    }

    console.log('[API Track] Visitor already counted today, skipping');
    return NextResponse.json({ success: true, sessionId, counted: false });
  } catch (error) {
    console.error('[API Track] Error tracking visitor:', error);
    console.error('[API Track] Error stack:', error instanceof Error ? error.stack : 'No stack');
    return NextResponse.json(
      { error: 'Failed to track visitor', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

