import { mailService } from '../services/mail.service.js'
import { eventBusService } from '../../../services/event-bus.service.js'

const { useParams, useNavigate } = ReactRouterDOM

export function MailToolBar({ mailId, onClick }) {
  const navigate = useNavigate()

  function onRemoveMail(mailId) {
    mailService
      .remove(mailId)
      .then(() => {
        // Emit an event indicating a mail has been deleted
        eventBusService.emit('mail-deleted')
      })
      .catch((err) => {
        console.error(err)
        eventBusService.emit('show-user-msg', {
          txt: `Problem Removing Mail ${mailId}`,
          type: 'error',
        })
      })
  }

  return (
    <div className="mail-toolbar" onClick={onClick}>
      <button className="btn btn-delete-toolbar">
        <img
          src="../../../appSus/assets/img/mail/ToolBar/delete-mail.svg"
          alt=""
          onClick={() => onRemoveMail(mailId)}
        />
      </button>
      <button>💤</button>
    </div>
  )
}
