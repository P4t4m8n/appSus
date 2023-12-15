import { MailList } from '../cmps/MailList.jsx'
import { MailSideBar } from '../cmps/MailSideBar.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { mailService } from '../services/mail.service.js'
import { MailHeader } from '../cmps/MailHeader.jsx'
import { MailCompose } from '../cmps/MailCompose.jsx'
const { Fragment } = React

const { useState, useEffect } = React
const { useNavigate } = ReactRouterDOM

export function MailIndex() {
  const [mails, setMails] = useState(null)
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
  const [globalSearch, setGlobalSearch] = useState('')
  const [showFilter, setShowFilter] = useState(false)
  const [isShowCompose, setIsShowCompose] = useState(false)

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

  function onShowCompose() {
    setIsShowCompose((prevState) => !prevState)
    console.log(
      '🚀 ~ file: MailIndex.jsx:37 ~ onShowCompose ~ isShowCompose:',
      isShowCompose
    )
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
        {isShowCompose && <MailCompose onShowCompose={onShowCompose} />}
      </section>
    </div>
  )
}
