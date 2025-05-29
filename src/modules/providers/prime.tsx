import GeneralProvider from './general'
import EducationProvider from './education'
import ExperienceProvider from './experience'

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <GeneralProvider>
      <EducationProvider>
        <ExperienceProvider>{children}</ExperienceProvider>
      </EducationProvider>
    </GeneralProvider>
  )
}

export default AppContextProvider
