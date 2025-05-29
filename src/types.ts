interface GeneralContextValue {
  state: {
    firstName: string
    lastName: string
    jobTitle: string
    emailAddress: string
    phoneNumber: string
    location: string
  }
  actions: {
    setFirstName: (value: string) => void
    setLastName: (value: string) => void
    setJobTitle: (value: string) => void
    setEmailAddress: (value: string) => void
    setPhoneNumber: (value: string) => void
    setLocation: (value: string) => void
    reset: () => void
  }
}

type SchoolCourse = {
  courseName: string
  status: boolean
}

type SchoolData = {
  school: string
  courseId: string
  courseName: string
  courses: SchoolCourse[]
}

interface EducationContextValue {
  state: {
    SchoolData: SchoolData
    SchoolCourses: SchoolCourse[]
    isCompleted: boolean
  }
  actions: {
    setSchoolData: (obj: SchoolData) => void
    setSchoolCourses: (arr: SchoolCourse[]) => void
    handleSchoolChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleCheckboxCompleted: (e: React.ChangeEvent<HTMLInputElement>) => void
    updateCourse: () => void
    reset: () => void
  }
}

type Skill = {
  skillId: string
  skillName: string
}

type WorkHistory = {
  workId: string
  company: string
  workTime: string
  workTitle: string
  descriptionId: string
  description: string
  descriptions: string[]
}

interface ExperienceContextValue {
  state: {
    currentlyLearning: string
    skills: Skill[]
    skillData: Skill
    workHistories: WorkHistory[]
    workData: WorkHistory
  }
  actions: {
    setCurrentlyLearning: (value: string) => void
    setSkills: (arr: Skill[]) => void
    setSkillData: (obj: Skill) => void
    setWorkHistories: (arr: WorkHistory[]) => void
    setWorkData: (obj: WorkHistory) => void
    handleSkillChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleWorkChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void
    updateSkill: () => void
    updateWork: () => void
    updateDescription: () => void
    reset: () => void
  }
}

type PrintPreview = {
  print: () => void
}

export type {
  GeneralContextValue,
  EducationContextValue,
  ExperienceContextValue,
  Skill,
  WorkHistory,
  SchoolData,
  SchoolCourse,
  PrintPreview,
}
