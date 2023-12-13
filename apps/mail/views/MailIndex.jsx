import { MailList } from '../cmps/MailList.jsx'
import { mailService } from '../services/mail.service.js'

const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function MailIndex() {
  const [mails, setMails] = useState(null)
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

  useEffect(() => {
    loadMails()
  }, [filterBy])

  function loadMails() {
    mailService.query(filterBy).then(setMails)
  }

  if (!mails) return <div>Loading...</div>

  return (
    <section className="mail-index">
      <MailList mails={mails} />
    </section>
  )
}
