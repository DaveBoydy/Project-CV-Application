import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { MdLocationOn } from 'react-icons/md'
import { useGeneralContext } from '../../context'

const Contact: React.FC = () => {
  const { state } = useGeneralContext()
  return (
    <header className="contact">
      <div>
        <p className="number">
          <span className="contact-phone">
            <FaPhone size={16} />
          </span>
          <span>{state.phoneNumber || '+44 7123 456 789'}</span>
        </p>
        <p className="email">
          <span className="contact-email">
            <MdEmail size={16} />
          </span>
          <span>{state.emailAddress || 'johndoe@site.com'}</span>
        </p>
        <p className="location">
          <span className="contact-location">
            <MdLocationOn size={16} />
          </span>
          <span>{state.location || 'Glasgow, UK'}</span>
        </p>
      </div>
    </header>
  )
}

export default Contact
