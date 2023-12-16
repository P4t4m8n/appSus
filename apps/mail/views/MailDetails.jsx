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

  function onRemoveMail(mailId) {
    mailService
      .remove(mailId)
      .then(() => {
        // setMail(null)
        onBack()
        // showSuccessMsg(`Book Removed! ${bookId}`)
      })
      .catch((err) => {
        console.error(err)
        // showErrorMsg(`Problem Removing ${bookId}`)
      })
  }

  if (!mail) return <div>Loading...</div>

  return (
    <section className="mail-details">
      <aside className="mail-details-aside">
        <img
          className="img-profile-photo"
          src="../../../appSus/assets/img/mail/MailDetails/profile-photo.png"
          alt=""
        />
      </aside>
      <main className="mail-details-main">
        <div className="mail-details-icons">
          <button onClick={onBack}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVElEQVR4nO3SsQmAQAxA0dc6geASh2hj7yxO4mw2OsoNYeUEJohwH9I+CAmtXzSji8JWHFHgggt9BDbixBCBFVTs2F5OSQHDV045SsrbPE3RYOvjbr4YF2AxCA62AAAAAElFTkSuQmCC" />
          </button>
          {/* <button>
          <img
            className="img-star-mail"
            src="../../../appSus/assets/img/mail/star-mail.png"
            alt="Star"
            title="Star"
          />
        </button> */}
          <button>
            <img
              className="img-delete-mail"
              src="../../../appSus/assets/img/mail/ToolBar/delete-mail.svg"
              alt="Delete mail"
              title="Delete mail"
              onClick={() => onRemoveMail(mail.id)}
            />
          </button>
        </div>
        <h1 className="mail-subject">{mail.subject}</h1>
        {/* <div className="mail-from-to-container"> */}
        <h3 className="mail-from">{mail.from}</h3>
        <h3 className="mail-to">{mail.to}</h3>
        {/* </div> */}
        <p className="mail-body">{mail.body}</p>
      </main>
    </section>
  )
}
