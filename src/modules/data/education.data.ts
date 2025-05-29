import type { SchoolCourse } from '../../types'

const initCourses: SchoolCourse[] = Array.from({ length: 10 }, () => ({
  courseName: '',
  status: false,
}))

initCourses[0].courseName = 'Bachelor of Computer Science Degree'
initCourses[0].status = true

const initSchoolData = {
  school: '',
  courseId: '2',
  courseName: '',
  courses: [
    { courseName: '', status: false },
    { courseName: '', status: false },
  ],
}

export { initCourses, initSchoolData }
