import './styles/App.css'
import InputComponent from './modules/Input'
import DisplayComponent from './modules/display'
import PreviewButton from './modules/generator/preview'

import { useRef, forwardRef } from 'react'
import { useReactToPrint } from 'react-to-print'

const PrintableContent = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <DisplayComponent />
  </div>
))

function App() {
  const componentRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  })

  return (
    <>
      <InputComponent print={handlePrint} />
      <div id="resume" className="preview-wrapper">
        <PrintableContent ref={componentRef} />
      </div>
      <div className="overlay"></div>
      <PreviewButton />
    </>
  )
}

export default App
