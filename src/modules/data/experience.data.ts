import type { Skill, WorkHistory } from '../../types'

const initSkills: Skill[] = Array.from({ length: 10 }, (_, i) => ({
  skillId: `skill-${i + 1}`,
  skillName: '',
}))

initSkills[0].skillName = 'React'
initSkills[1].skillName = 'Typescript'
initSkills[2].skillName = 'Tailwind'

const initHistories: WorkHistory[] = Array.from({ length: 2 }, (_, i) => ({
  workId: `work-${i + 1}`,
  company: '',
  workTime: '',
  workTitle: '',
  descriptionId: '',
  description: '',
  descriptions: ['', '', ''],
}))

initHistories[0].company = 'Kiss Studio'
initHistories[0].workTime = 'One Year'
initHistories[0].workTitle = 'Junior Web Developer'
initHistories[0].descriptions[0] =
  'Developed and maintained 2 RESTful APIs using typescript, enabling seamless integration with the InnerVision service and improving data flow efficiency by 13%'
initHistories[0].descriptions[1] =
  'Implemented responsive design using react for the Synapse project, resulting in a 10% increase in mobile user satisfaction and a 7% decrease in bounce rate'

initHistories[1].company = 'Fiverr'
initHistories[1].workTime = 'Five months'
initHistories[1].workTitle = 'Full stack Developer'
initHistories[1].descriptions[0] =
  'Built a car dealership website for Tiny Cars using mern stack'
initHistories[1].descriptions[1] =
  'Rebuilt a dental practice website for McCavity dental care decreasing page load times by 70%'

const initWorkData = {
  workId: '2',
  company: '',
  workTime: '',
  workTitle: '',
  descriptionId: '3',
  description: '',
  descriptions: ['', '', ''],
}

export { initSkills, initHistories, initWorkData }
