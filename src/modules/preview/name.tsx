import { useGeneralContext } from '../../context'

const Name: React.FC = () => {
  const { state } = useGeneralContext()
  return (
    <header className="name">
      <h1>
        {state.firstName || 'JOHN'} {state.lastName || 'DOE'}
      </h1>
      <h2>{state.jobTitle || 'Junior Web Developer'}</h2>
    </header>
  )
}

export default Name
