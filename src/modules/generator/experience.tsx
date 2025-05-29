import { useExperienceContext } from '../../context'
//TODO A section to INPUT practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
const ExperienceGenerator: React.FC = () => {
  const { state, actions } = useExperienceContext()
  return (
    <section>
      <h2 className="section">Experience</h2>
      <fieldset className="field-set">
        <legend className="legend">Currently learning:</legend>
        <label htmlFor="misc">Skill</label>
        <input
          type="text"
          value={state.currentlyLearning}
          onChange={(e) => actions.setCurrentlyLearning(e.target.value)}
          id="misc"
          placeholder="Enter skill"
        />
      </fieldset>

      <fieldset className="field-set">
        <legend className="legend">Skills learned:</legend>
        <label htmlFor="number">Skill Slot (1 - 10)</label>
        <input
          type="number"
          value={state.skillData.skillId}
          onChange={actions.handleSkillChange}
          id="number"
          name="skillId"
          min="1"
          max="10"
        ></input>
        <label htmlFor="skill">Skill </label>
        <input
          type="text"
          value={state.skillData.skillName}
          onChange={actions.handleSkillChange}
          id="skill"
          name="skillName"
          placeholder="Enter skill"
        />
        <button onClick={actions.updateSkill}>Add/Remove Skill</button>
      </fieldset>

      <fieldset className="field-set">
        <legend className="legend">Work history:</legend>
        <label htmlFor="workId">Company Slot (1 - 2)</label>
        <input
          type="number"
          value={state.workData.workId}
          onChange={actions.handleWorkChange}
          id="workId"
          name="workId"
          min="1"
          max="2"
        ></input>
        <label htmlFor="company">Company/Organization/Freelance</label>
        <input
          type="text"
          value={state.workData.company}
          onChange={actions.handleWorkChange}
          id="company"
          name="company"
          placeholder="Enter workplace"
        />
        <label htmlFor="workTime">Months/Years</label>
        <input
          type="text"
          value={state.workData.workTime}
          onChange={actions.handleWorkChange}
          id="workTime"
          name="workTime"
          placeholder="Enter time worked"
        />

        <label htmlFor="workTitle">Title/Position</label>
        <input
          type="text"
          value={state.workData.workTitle}
          onChange={actions.handleWorkChange}
          id="workTitle"
          name="workTitle"
          placeholder="Enter job title"
        />

        <button onClick={actions.updateWork}>Update History</button>

        <label htmlFor="descriptionId">Description Slot (1 - 3)</label>
        <input
          type="number"
          value={state.workData.descriptionId}
          onChange={actions.handleWorkChange}
          id="descriptionId"
          name="descriptionId"
          min="1"
          max="3"
        ></input>

        <label htmlFor="description">Job Description</label>
        <textarea
          value={state.workData.description}
          onChange={actions.handleWorkChange}
          id="description"
          name="description"
          rows={6}
          cols={26}
          placeholder="Enter brief job description"
        />
        <button onClick={actions.updateDescription}>
          Add/Remove Description
        </button>
      </fieldset>

      <button onClick={actions.reset}>Reset experience</button>
    </section>
  )
}

export default ExperienceGenerator
