'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

const blogPosts = [
  {
    title: 'Building Scalable Next.js Applications',
    description:
      'Learn how to structure and scale your Next.js applications for production.',
    date: '2024-01-15',
    slug: 'scalable-nextjs-applications',
    category: 'Next.js',
  },
  {
    title: 'Mastering TypeScript in React',
    description:
      'A comprehensive guide to using TypeScript effectively in React projects.',
    date: '2024-01-10',
    slug: 'typescript-in-react',
    category: 'TypeScript',
  },
  {
    title: 'Animations with Framer Motion',
    description:
      'Creating smooth and performant animations using Framer Motion in Next.js.',
    date: '2024-01-05',
    slug: 'framer-motion-animations',
    category: 'Animation',
  },
]

const categories = ['All', 'Next.js', 'TypeScript', 'React', 'Animation', 'Tutorials']

const scrollAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Blog() {
  return (
    <div>
      {/* Section 1: Hero */}
      <motion.section
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollAnimation}
          >
            Blog
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              },
            }}
          >
            Thoughts, tutorials, and insights on web development
          </motion.p>
        </div>
      </motion.section>

      {/* Section 2: Recent Posts */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 bg-muted/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={scrollAnimation}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollAnimation}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
              Recent Posts
            </h2>
            <p className="text-center text-sm sm:text-base text-muted-foreground">
              Latest articles and tutorials
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{post.category}</span>
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{post.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-xs sm:text-sm">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">{post.description}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm sm:text-base text-primary hover:underline"
                    >
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 3: Categories */}
      <motion.section
        className="py-12 sm:py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={scrollAnimation}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollAnimation}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
              Browse by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-card border rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.3,
                        delay: index * 0.05,
                        type: 'spring',
                        stiffness: 100,
                      },
                    },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
