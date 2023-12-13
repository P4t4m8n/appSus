import { MailList } from '../cmps/MailList.jsx'
import { mailService } from '../services/mail.service.js'

const { useState, useEffect } = React
const { useNavigate } = ReactRouterDOM

export function MailIndex() {
  const [mails, setMails] = useState(null)
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
  const navigate = useNavigate()

  useEffect(() => {
    loadMails()
  }, [filterBy])

  function loadMails() {
    mailService.query(filterBy).then(setMails)
  }

  if (!mails) return <div>Loading...</div>

  return (
    <section className="mail-index">
      <button
        className="btn btn-mail-compose"
        onClick={() => navigate(`/mail/compose`)}
      >
        Compose
      </button>
      <MailList mails={mails} />
    </section>
  )
}
