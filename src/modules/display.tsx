import '../styles/preview.css'
import Name from './preview/name'
import Contact from './preview/contact'
import Skills from './preview/skills'
import Experience from './preview/experience'
import Education from './preview/education'

const DisplayComponent: React.FC = () => {
  return (
    <div className="preview-container">
      <Name />
      <Contact />
      <Skills />
      <Experience />
      <Education />
    </div>
  )
}

export default DisplayComponent
