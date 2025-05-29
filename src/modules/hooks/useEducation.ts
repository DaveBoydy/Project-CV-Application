import { useState } from 'react'
import type { SchoolData, SchoolCourse } from '../../types'
import { initCourses, initSchoolData } from '../data/education.data'

function useEducation() {
  const [isCompleted, setIsCompleted] = useState(false)
  const [SchoolCourses, setSchoolCourses] =
    useState<SchoolCourse[]>(initCourses)
  const [SchoolData, setSchoolData] = useState<SchoolData>(initSchoolData)

  const handleSchoolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSchoolData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCompleted(e.target.checked)
  }

  const updateCoursesCompleted = (
    id: string,
    name: string,
    status: boolean,
  ) => {
    const index = parseInt(id) - 1

    setSchoolCourses((prev) =>
      prev.map((course, i) => {
        if (i === index) {
          return { ...course, courseName: name, status: status }
        } else {
          return course
        }
      }),
    )
  }

  return {
    SchoolData,
    SchoolCourses,
    isCompleted,
    setSchoolData,
    setSchoolCourses,
    handleSchoolChange,
    handleCheckboxCompleted,
    updateCoursesCompleted,
  }
}

export default useEducation
