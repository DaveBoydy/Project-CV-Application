import { useExperienceContext } from '../../context'

const Experience = () => {
  const { state } = useExperienceContext()
  return (
    <section className="experience">
      <h2 className="section">EXPERIENCE</h2>
      <h3>{state.workHistories[0].company}</h3>

      <p>
        <i>{state.workHistories[0].workTime}</i>
      </p>

      <h3>{state.workHistories[0].workTitle}</h3>
      <ul>
        <li>{state.workHistories[0].descriptions[0]}</li>

        <li>{state.workHistories[0].descriptions[1]}</li>

        <li>{state.workHistories[0].descriptions[2]}</li>
      </ul>

      <h3>{state.workHistories[1].company}</h3>
      <p>
        <i>{state.workHistories[1].workTime}</i>
      </p>

      <h3>{state.workHistories[1].workTitle}</h3>
      <ul>
        <li>{state.workHistories[1].descriptions[0]}</li>

        <li>{state.workHistories[1].descriptions[1]}</li>

        <li>{state.workHistories[1].descriptions[2]}</li>
      </ul>
    </section>
  )
}

export default Experience
