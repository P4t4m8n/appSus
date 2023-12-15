import { MailCompose } from './MailCompose.jsx'

const { NavLink, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

export function MailSideBar({ filterBy, setFilterBy, onShowCompose }) {
  // const navigate = useNavigate()

  function handleSentClick() {}

  return (
    <aside className="mail-sidebar">
      <button
        className="btn btn-mail-compose"
        // onClick={() => navigate(`/mail/compose`)}

        onClick={onShowCompose}
      >
        Compose
      </button>
      <ul>
        <li>
          <NavLink to="/mail">Inbox</NavLink>
        </li>
        <li>
          {/* <NavLink to="/mail">Sent</
          NavLink>{' '} */}
          <button className="btn btn-sent" onClick={handleSentClick}>
            Sent
          </button>

          {
            //TODO: Implement inbox vs sent folder
          }
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
