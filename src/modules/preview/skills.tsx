import { useExperienceContext } from '../../context'

const Skills: React.FC = () => {
  const { state } = useExperienceContext()
  return (
    <section className="skills">
      <h2 className="section">SKILLS</h2>
      <h3>Learning</h3>
      <p>
        <i>{state.currentlyLearning || 'About Web Accessibility'}</i>
      </p>

      <h3>Learned</h3>
      <ul>
        <li>{state.skills[0].skillName}</li>
        <li>{state.skills[1].skillName}</li>
        <li>{state.skills[2].skillName}</li>
        <li>{state.skills[3].skillName}</li>
        <li>{state.skills[4].skillName}</li>
        <li>{state.skills[5].skillName}</li>
        <li>{state.skills[6].skillName}</li>
        <li>{state.skills[7].skillName}</li>
        <li>{state.skills[8].skillName}</li>
        <li>{state.skills[9].skillName}</li>
      </ul>
    </section>
  )
}

export default Skills
