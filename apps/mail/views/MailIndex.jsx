import { MailList } from '../cmps/MailList.jsx'
import { MailSideBar } from '../cmps/MailSideBar.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'
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

  // In MailIndex component
  function loadMails() {
    console.log('Loading mails with filter:', filterBy) // Add this line
    mailService.query(filterBy).then((mails) => {
      console.log('Loaded mails:', mails) // Add this line
      setMails(mails)
    })
  }

  function onSetFilterBy(newFilter) {
    setFilterBy(newFilter)
  }

  if (!mails) return <div>Loading...</div>

  return (
    <section className="mail-index">
      <MailFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
      <MailSideBar filterBy={filterBy} onSetFilterBy={setFilterBy} />
      <MailList mails={mails} />
    </section>
  )
}
