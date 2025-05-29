import { useEducationContext } from '../../context'

const Education: React.FC = () => {
  const { state } = useEducationContext()
  return (
    <section className="education">
      <h2 className="section">EDUCATION</h2>

      <h3>{state.SchoolData.school || 'Open University'}</h3>

      <ul>
        <li>{state.SchoolCourses[0].courseName}</li>
        <b>
          {Boolean(state.SchoolCourses[0].courseName) &&
            state.SchoolCourses[0].status &&
            'Status '}
        </b>
        <i>
          {Boolean(state.SchoolCourses[0].courseName) &&
            state.SchoolCourses[0].status &&
            'Completed'}
        </i>

        <b>
          {Boolean(state.SchoolCourses[0].courseName) &&
            !state.SchoolCourses[0].status &&
            'Status '}
        </b>
        <i>
          {Boolean(state.SchoolCourses[0].courseName) &&
            !state.SchoolCourses[0].status &&
            'On-Going'}
        </i>

        <li>{state.SchoolCourses[1].courseName}</li>
        <b>
          {Boolean(state.SchoolCourses[1].courseName) &&
            state.SchoolCourses[1].status &&
            'Status '}
        </b>
        <i>
          {Boolean(state.SchoolCourses[1].courseName) &&
            state.SchoolCourses[1].status &&
            'Completed'}
        </i>

        <b>
          {Boolean(state.SchoolCourses[1].courseName) &&
            !state.SchoolCourses[1].status &&
            'Status '}
        </b>
        <i>
          {Boolean(state.SchoolCourses[1].courseName) &&
            !state.SchoolCourses[1].status &&
            'On-Going'}
        </i>
      </ul>
    </section>
  )
}

export default Education
