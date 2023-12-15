import { MailList } from '../cmps/MailList.jsx'
import { MailSideBar } from '../cmps/MailSideBar.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { mailService } from '../services/mail.service.js'
import { MailHeader } from '../cmps/MailHeader.jsx'
import { MailCompose } from '../cmps/MailCompose.jsx'
import { eventBusService } from '../../../services/event-bus.service.js'

const { Fragment } = React

const { useState, useEffect } = React
const { useNavigate } = ReactRouterDOM

export function MailIndex() {
  const [mails, setMails] = useState(null)
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
  const [globalSearch, setGlobalSearch] = useState('')
  const [showFilter, setShowFilter] = useState(false)
  const [isShowCompose, setIsShowCompose] = useState(false)
  const [isSendMail, setIsSendMail] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    loadMails()
  }, [filterBy, globalSearch])

  // Listening for new mail saved(sent)
  useEffect(() => {
    if (isSendMail) {
      loadMails()
      setIsSendMail(false) // Reset the flag after mails are loaded
    }
  }, [isSendMail])

  useEffect(() => {
    // Function to call when mail is deleted
    const onMailDeleted = () => {
      loadMails()
    }

    // Listen for 'mail-deleted' event
    const unsubscribe = eventBusService.on('mail-deleted', onMailDeleted)

    // Cleanup subscription
    return () => {
      unsubscribe()
    }
  }, [])

  function loadMails() {
    mailService.query({ ...filterBy, globalSearch }).then((retrievedMails) => {
      const sortedMails = retrievedMails.sort((a, b) => b.sentAt - a.sentAt)
      setMails(sortedMails)
    })
  }

  function onShowCompose() {
    setIsShowCompose((prevState) => !prevState)
  }

  function onSendMail() {
    setIsSendMail(true)
  }

  function onSetFilterBy(newFilter) {
    setFilterBy(newFilter)
  }

  if (!mails) return <div>Loading...</div>

  return (
    <div className="mail-app-container">
      <MailHeader
        filterBy={filterBy}
        onSetFilterBy={setFilterBy}
        globalSearch={globalSearch}
        onSetGlobalSearch={setGlobalSearch}
        showFilter={showFilter}
        onSetShowFilter={setShowFilter}
      />
      <section className="mail-index">
        <div className="container-sidebar-mails">
          <MailSideBar
            filterBy={filterBy}
            onSetFilterBy={setFilterBy}
            onShowCompose={onShowCompose}
          />
          <MailList mails={mails} />
        </div>
        {isShowCompose && (
          <MailCompose onShowCompose={onShowCompose} onSendMail={onSendMail} />
        )}
      </section>
    </div>
  )
}
