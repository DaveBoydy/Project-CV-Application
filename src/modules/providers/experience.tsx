import type { ExperienceContextValue } from '../../types'
import { ExperienceContext } from '../../context'
import {
  initSkills,
  initHistories,
  initWorkData,
} from '../data/experience.data'

import useSkills from '../hooks/experience/useSkills'
import useHistory from '../hooks/experience/useHistory'

const ExperienceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    currentlyLearning,
    skills,
    skillData,
    setCurrentlyLearning,
    setSkills,
    setSkillData,
    handleSkillChange,
    updateSkillName,
  } = useSkills()

  const {
    workHistories,
    workData,
    setWorkHistories,
    setWorkData,
    handleWorkChange,
    updateWorkName,
    updateWorkDescription,
  } = useHistory()

  const experience: ExperienceContextValue = {
    state: {
      currentlyLearning,
      skills,
      skillData,
      workHistories,
      workData,
    },
    actions: {
      setCurrentlyLearning,
      setSkills,
      setSkillData,
      handleSkillChange,
      setWorkHistories,
      setWorkData,
      handleWorkChange,
      updateSkill: () =>
        updateSkillName(skillData.skillId, skillData.skillName),

      updateWork: () =>
        updateWorkName(
          workData.workId,
          workData.company,
          workData.workTime,
          workData.workTitle,
        ),
      updateDescription: () =>
        updateWorkDescription(
          workData.workId,
          workData.descriptionId,
          workData.description,
        ),
      reset: () => {
        setSkills(initSkills)
        setSkillData({
          skillId: '4',
          skillName: '',
        })
        setWorkData(initWorkData)
        setWorkHistories(initHistories)
      },
    },
  }

  return (
    <ExperienceContext.Provider value={experience}>
      {children}
    </ExperienceContext.Provider>
  )
}

export default ExperienceProvider
