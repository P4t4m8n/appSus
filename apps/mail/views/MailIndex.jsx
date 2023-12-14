import { MailList } from '../cmps/MailList.jsx'
import { MailSideBar } from '../cmps/MailSideBar.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { mailService } from '../services/mail.service.js'

const { useState, useEffect } = React
const { useNavigate } = ReactRouterDOM

export function MailIndex() {
  const [mails, setMails] = useState(null)
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
  const [globalSearch, setGlobalSearch] = useState('')
  const [showFilter, setShowFilter] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    loadMails()
  }, [filterBy, globalSearch])

  function loadMails() {
    mailService.query({ ...filterBy, globalSearch }).then((retrievedMails) => {
      const sortedMails = retrievedMails.sort((a, b) => b.sentAt - a.sentAt)
      setMails(sortedMails)
    })
  }

  function onSetFilterBy(newFilter) {
    setFilterBy(newFilter)
  }

  if (!mails) return <div>Loading...</div>

  return (
    <section className="mail-index">
      <input
        className="input-global-search"
        type="text"
        placeholder="Global Search..."
        value={globalSearch}
        onChange={(e) => setGlobalSearch(e.target.value)}
      />

      <button
        className="btn btn-toggle-filter"
        onClick={() => setShowFilter(!showFilter)}
      >
        Toggle Filter
      </button>

      {showFilter && (
        <MailFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
      )}

      <div className="container-sidebar-mails">
        <MailSideBar filterBy={filterBy} onSetFilterBy={setFilterBy} />
        <MailList mails={mails} />
      </div>
    </section>
  )
}
