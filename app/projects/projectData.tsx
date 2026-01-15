// Re-export everything from the centralized data file
export {
  type Project,
  allProjects,
  featuredProjects,
  nonFeaturedProjects,
  getProjects,
  getFeaturedProjects,
  getProjectById,
  getProjectsByTechnology,
  getAllTechnologies,
} from '@/lib/projectsData'
