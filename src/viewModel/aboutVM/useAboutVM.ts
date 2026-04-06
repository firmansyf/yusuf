import { Experience, Skill } from '@/data'
import { ExperienceData, SkillData } from '@/types/about/aboutTypes'

export const useAboutVM = () => {
  return {
    experience: Experience as ExperienceData[],
    skill: Skill as SkillData[],
    isLoading: false,
  }
}
