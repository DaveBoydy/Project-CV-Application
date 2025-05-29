import { HiOutlineEye } from 'react-icons/hi'

const PreviewButton: React.FC = () => {
  const handlePreview = () => {
    const container = document.getElementById('root')
    container!.classList.toggle('preview-active')

    const element = document.getElementById('resume')
    element!.classList.toggle('preview-active')
  }

  return (
    <div>
      <>
        <button className="eye-button" onClick={handlePreview}>
          <HiOutlineEye size={24} />
        </button>
      </>
    </div>
  )
}

export default PreviewButton
