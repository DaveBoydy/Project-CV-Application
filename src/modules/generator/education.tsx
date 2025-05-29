import { useEducationContext } from '../../context'

//TODO A section to INPUT your educational experience (school name, title of study and date of study)

const EducationGenerator: React.FC = () => {
  const { state, actions } = useEducationContext()

  return (
    <>
      <section>
        <h2 className="section">Education</h2>
        <fieldset className="field-set">
          <legend className="legend">Further education:</legend>
          <label htmlFor="school">University/College</label>
          <input
            type="text"
            value={state.SchoolData.school}
            onChange={actions.handleSchoolChange}
            id="school"
            name="school"
            placeholder="Enter Institute"
          />
          <label htmlFor="courseId">Course Slot (1 - 2)</label>
          <input
            type="number"
            value={state.SchoolData.courseId}
            onChange={actions.handleSchoolChange}
            id="courseId"
            name="courseId"
            min="1"
            max="2"
          ></input>
          <label htmlFor="courseName">Degree/Course</label>
          <input
            type="text"
            value={state.SchoolData.courseName}
            onChange={actions.handleSchoolChange}
            id="courseName"
            name="courseName"
            placeholder="Enter qualifications"
          />
          <div className="checkbox">
            <label htmlFor="status">On-going</label>
            <input
              type="checkbox"
              checked={state.isCompleted}
              onChange={actions.handleCheckboxCompleted}
              id="status"
            />
          </div>
          <button onClick={actions.updateCourse}>Update Course</button>
        </fieldset>

        <button onClick={actions.reset}>Reset Education</button>
      </section>
    </>
  )
}

export default EducationGenerator
