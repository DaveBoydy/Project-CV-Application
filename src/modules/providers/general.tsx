import { useState } from 'react'
import type { GeneralContextValue } from '../../types'
import { GeneralContext } from '../../context'

const GeneralProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [location, setLocation] = useState('')
  const general: GeneralContextValue = {
    state: {
      firstName,
      lastName,
      jobTitle,
      emailAddress,
      phoneNumber,
      location,
    },
    actions: {
      setFirstName,
      setLastName,
      setJobTitle,
      setEmailAddress,
      setPhoneNumber,
      setLocation,
      reset: () => {
        setFirstName('')
        setLastName('')
        setJobTitle('')
        setEmailAddress('')
        setPhoneNumber('')
        setLocation('')
      },
    },
  }

  return (
    <GeneralContext.Provider value={general}>
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralProvider
