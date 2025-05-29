import '../styles/generator.css'
import React from 'react'
import GeneralGenerator from './generator/general'
import EducationGenerator from './generator/education'
import ExperienceGenerator from './generator/experience'
import type { PrintPreview } from '../types'
import { PiPrinterLight } from 'react-icons/pi'

const InputComponent: React.FC<PrintPreview> = ({ print }) => {
  return (
    <div className="generator-container">
      <header className="generator-header">
        <h1>Resume Generator</h1>

        <div className="printer-widget">
          <p>
            <i>Print your customized Resume</i>
          </p>
          <button className="printer-button" onClick={() => print()}>
            <PiPrinterLight size={24} />
          </button>
        </div>
      </header>
      <GeneralGenerator />
      <ExperienceGenerator />
      <EducationGenerator />
    </div>
  )
}

export default InputComponent
