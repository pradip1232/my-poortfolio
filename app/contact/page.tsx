'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

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

export default function Contact() {
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
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollAnimation}
          >
            Get In Touch
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
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </motion.p>
        </div>
      </motion.section>

      {/* Section 2: Contact Information */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 bg-muted/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={scrollAnimation}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-8 sm:mb-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scrollAnimation}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Contact Information
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Reach out through any of these channels
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5 },
                  },
                }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">Get in Touch</CardTitle>
                    <CardDescription className="text-sm">Ways to reach me</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
                      <a
                        href="mailto:755201pradip@gmail.com"
                        className="text-sm sm:text-base md:text-lg hover:text-primary transition-colors break-all"
                      >
                        755201pradip@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm sm:text-base md:text-lg">
                        <a href="tel:+918057196070" className="hover:text-primary transition-colors">+91 8057196070</a>,{" "}
                        <a href="tel:9258682549" className="hover:text-primary transition-colors">9258682549</a>
                      </span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm sm:text-base md:text-lg">Gurugram, Sector 45, India</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: 0.2 },
                  },
                }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">Social Media</CardTitle>
                    <CardDescription className="text-sm">Connect with me online</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3 sm:gap-4">
                      <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon" className="h-10 w-10 sm:h-12 sm:w-12">
                          <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/pradipmourya-61a387218/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon" className="h-10 w-10 sm:h-12 sm:w-12">
                          <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                      </Link>
                      <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon" className="h-10 w-10 sm:h-12 sm:w-12">
                          <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Contact Form */}
      <motion.section
        className="py-12 sm:py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={scrollAnimation}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="mb-6 sm:mb-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scrollAnimation}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Send a Message
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Contact Form</CardTitle>
                  <CardDescription className="text-sm">
                    Let&apos;s start a conversation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                        defaultValue="755201pradip@gmail.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
