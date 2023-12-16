import { MailCompose } from './MailCompose.jsx'

const { NavLink, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

export function MailSideBar({
  filterBy,
  setFilterBy,
  onShowCompose,
  onFilterSentMails,
  onFilterReceivedMails,
}) {
  const navigate = useNavigate()

  return (
    <aside className="mail-sidebar">
      <button className="btn btn-mail-compose" onClick={onShowCompose}>
        Compose
      </button>
      <ul className="container-sidebar-icons">
        <li className="container-sidebar-inbox" onClick={onFilterReceivedMails}>
          <img
            className="img-sidebar-inbox"
            src="../../../appSus/assets/img/mail/SideBar/sidebar-inbox.png"
            alt=""
          />
          <NavLink to="/mail">Inbox</NavLink>
        </li>

        <li className="container-sidebar-sent" onClick={onFilterSentMails}>
          <img
            className="img-sidebar-sent"
            src="../../../appSus/assets/img/mail/SideBar/sidebar-sent.png"
            alt=""
          />
          <NavLink to="/mail">Sent</NavLink>
        </li>
        <li>
          <NavLink to="/mail/drafts">Drafts</NavLink>{' '}
          {
            //TODO: Implement draft folder
          }
        </li>
      </ul>
    </aside>
  )
}
