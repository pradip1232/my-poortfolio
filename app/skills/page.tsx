'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Jest', level: 80 },
      { name: 'CI/CD', level: 75 },
    ],
  },
]

const tools = [
  { name: 'VS Code', category: 'Editor' },
  { name: 'Figma', category: 'Design' },
  { name: 'Postman', category: 'API Testing' },
  { name: 'GitHub Actions', category: 'CI/CD' },
  { name: 'Vercel', category: 'Deployment' },
  { name: 'MongoDB Atlas', category: 'Database' },
]

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

export default function Skills() {
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
            Skills
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
            Technologies and tools I work with
          </motion.p>
        </div>
      </motion.section>

      {/* Section 2: Skill Categories */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 bg-muted/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={scrollAnimation}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-card border rounded-lg p-4 sm:p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: categoryIndex * 0.1,
                    },
                  },
                }}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{category.title}</h2>
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm sm:text-base font-medium">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <motion.div
                          className="bg-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 3: Tools & Technologies */}
      <motion.section
        className="py-12 sm:py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={scrollAnimation}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="mb-8 sm:mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollAnimation}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Tools & Technologies
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Additional tools I use in my daily workflow
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-card border rounded-lg p-3 sm:p-4 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      delay: index * 0.05,
                      type: 'spring',
                      stiffness: 100,
                    },
                  },
                }}
              >
                <div className="font-semibold text-sm sm:text-base mb-1">{tool.name}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{tool.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
