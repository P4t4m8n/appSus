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

  return (
    <section className="mail-details">
      <div className="mail-details-icons">
        <button>
          <img
            className="img-star-mail"
            src="../../../appSus/assets/img/mail/star-mail.png"
            alt="Star"
            title="Star"
          />
        </button>
        <button>
          <img
            className="img-delete-mail"
            src="../../../appSus/assets/img/mail/delete-mail.png"
            alt="Delete mail"
            title="Delete mail"
          />
        </button>
      </div>
      <h1 className="mail-subject">{mail.subject}</h1>
      <h3 className="mail-from">{mail.from}</h3>
      <h3 className="mail-to">{mail.to}</h3>
      <p className="mail-body">{mail.body}</p>
      <button onClick={onBack}>Back</button>
    </section>
  )
}
