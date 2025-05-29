import { useState } from 'react'
import type { Skill } from '../../../types'
import { initSkills } from '../../data/experience.data'

function useSkills() {
  const [currentlyLearning, setCurrentlyLearning] = useState('')
  const [skills, setSkills] = useState<Skill[]>(initSkills)
  const [skillData, setSkillData] = useState<Skill>({
    skillId: '4',
    skillName: '',
  })

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setSkillData((prev) => ({ ...prev, [name]: value }))
  }

  const updateSkillName = (id: string, skillName: string) => {
    const uid = `skill-${id}`

    setSkills((prev) =>
      prev.map((skill) => {
        if (skill.skillName === skillName) {
          return { ...skill, skillName: '' }
        } else if (skill.skillId === uid) {
          return { ...skill, skillName }
        } else {
          return skill
        }
      }),
    )
  }

  return {
    currentlyLearning,
    skills,
    skillData,
    setCurrentlyLearning,
    setSkills,
    setSkillData,
    handleSkillChange,
    updateSkillName,
  }
}

export default useSkills
