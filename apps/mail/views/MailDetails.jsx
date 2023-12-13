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
            class="img-star-mail"
            src="../../../assets/img/mail/star-mail.png"
            alt="Star"
            title="Star"
          />
          <img
            class="img-delete-mail"
            src="../../../assets/img/mail/delete-mail.png"
            alt="Delete mail"
            title="Delete mail"
          />
        </button>
      </div>
    </section>
  )
}
