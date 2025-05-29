import { EducationContext } from '../../context'
import type { EducationContextValue } from '../../types'
import { initCourses, initSchoolData } from '../data/education.data'
import useEducation from '../hooks/useEducation'

const EducationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    SchoolData,
    SchoolCourses,
    isCompleted,
    setSchoolData,
    setSchoolCourses,
    handleSchoolChange,
    handleCheckboxCompleted,
    updateCoursesCompleted,
  } = useEducation()

  const education: EducationContextValue = {
    state: {
      SchoolData,
      SchoolCourses,
      isCompleted,
    },
    actions: {
      setSchoolData,
      setSchoolCourses,
      handleSchoolChange,
      handleCheckboxCompleted,
      updateCourse: () =>
        updateCoursesCompleted(
          SchoolData.courseId,
          SchoolData.courseName,
          isCompleted,
        ),
      reset: () => {
        setSchoolData(initSchoolData)
        setSchoolCourses(initCourses)
      },
    },
  }

  return (
    <EducationContext.Provider value={education}>
      {children}
    </EducationContext.Provider>
  )
}

export default EducationProvider
