import { Project } from '@/data'
import { ProjectItem } from '@/types/portfolio/portfolioTypes'

export const usePortfolioVM = () => {
  return {
    project: Project as ProjectItem[],
    isLoading: false,
  }
}
