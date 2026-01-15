import projectsJson from '@/data/projects.json'

// Project data type definition
export interface Project {
  id: number
  title: string
  description: string
  image: string
  imageAlt: string
  technologies: Array<{ name: string }>
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

// Get all projects from JSON
export const allProjects: Project[] = projectsJson.projects

// Get featured projects only
export const featuredProjects: Project[] = allProjects.filter(
  (project) => project.featured
)

// Get non-featured projects
export const nonFeaturedProjects: Project[] = allProjects.filter(
  (project) => !project.featured
)

// Helper function to get projects by limit
export const getProjects = (limit?: number): Project[] => {
  if (limit) {
    return allProjects.slice(0, limit)
  }
  return allProjects
}

// Helper function to get featured projects by limit
export const getFeaturedProjects = (limit?: number): Project[] => {
  if (limit) {
    return featuredProjects.slice(0, limit)
  }
  return featuredProjects
}

// Get project by ID
export const getProjectById = (id: number): Project | undefined => {
  return allProjects.find((project) => project.id === id)
}

// Get projects by technology
export const getProjectsByTechnology = (techName: string): Project[] => {
  return allProjects.filter((project) =>
    project.technologies.some(
      (tech) => tech.name.toLowerCase() === techName.toLowerCase()
    )
  )
}

// Get all unique technologies
export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>()
  allProjects.forEach((project) => {
    project.technologies.forEach((tech) => {
      techSet.add(tech.name)
    })
  })
  return Array.from(techSet).sort()
}
