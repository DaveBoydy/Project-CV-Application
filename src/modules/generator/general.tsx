import { useGeneralContext } from '../../context'

//TODO A section to INPUT general information like name, email and phone number.

const GeneralGenerator: React.FC = () => {
  const { state, actions } = useGeneralContext()

  return (
    <>
      <section>
        <h2 className="section">General</h2>
        <fieldset className="field-set">
          <legend className="legend">Personal Info:</legend>
          <label htmlFor="fname">First name</label>
          <input
            type="text"
            value={state.firstName}
            onChange={(e) => actions.setFirstName(e.target.value)}
            id="fname"
            placeholder="Enter first name"
          />
          <label htmlFor="lname">Last name</label>
          <input
            type="text"
            value={state.lastName}
            onChange={(e) => actions.setLastName(e.target.value)}
            id="lname"
            placeholder="Enter last name"
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={state.jobTitle}
            onChange={(e) => actions.setJobTitle(e.target.value)}
            id="title"
            placeholder="Enter job title"
          />
        </fieldset>
        <fieldset className="field-set">
          <legend className="legend">Contact Info:</legend>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            value={state.emailAddress}
            onChange={(e) => actions.setEmailAddress(e.target.value)}
            id="email"
            placeholder="Enter Email address"
          />
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            value={state.phoneNumber}
            onChange={(e) => actions.setPhoneNumber(e.target.value)}
            id="phone"
            name="phone"
            placeholder="Enter Phone number"
            autoComplete="tel"
          ></input>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            value={state.location}
            onChange={(e) => actions.setLocation(e.target.value)}
            id="location"
            placeholder="Enter country and city"
          />
        </fieldset>
        <button onClick={actions.reset}>Reset General</button>
      </section>
    </>
  )
}

export default GeneralGenerator
