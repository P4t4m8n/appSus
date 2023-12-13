import { mailService } from '../services/mail.service.js'

const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM

export function MailDetails() {
  const [mail, setMail] = useState(null)
  const { mailId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    mailService
      .get(mailId)
      .then(setMail)
      .catch((err) => {
        console.log('err loading mail:', err)
        navigate('/mail')
      })
  }, [mailId])

  function onBack() {
    navigate('/mail')
  }

  if (!mail) return <div>Loading...</div>

  return <section className="mail-details"></section>
}
