import { MailToolBar } from './MailToolBar.jsx'

export function MailPreview({ mail, navigateToMailDetails }) {
  const sentAtTimestamp = mail.sentAt

  const formattedSentAt = formatSentAt(sentAtTimestamp)

  function formatSentAt(sentAtTimestamp) {
    const sentAtDate = new Date(sentAtTimestamp)
    const today = new Date()

    // Check if sentAtDate is today
    if (sentAtDate.toDateString() === today.toDateString()) {
      // Format as time only (e.g., 10:30 AM)
      return sentAtDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      })
    } else {
      // Format as date only (e.g., Mar 15)
      return sentAtDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })
    }
  }

  function handleToolbarClick(event) {
    event.stopPropagation()
  }

  function handleContainerClick(event) {
    event.stopPropagation()
  }

  const readStatus = mail.isRead ? 'read' : 'unread'
  return (
    <tr
      onClick={navigateToMailDetails}
      className={`mail-row status-${readStatus}`}
    >
      <td>
        <div className="container-mail-btns" onClick={handleContainerClick}>
          <input type="checkbox" />
          <button className="star-btn"></button>
        </div>
      </td>
      <td className="mail-from">{mail.from}</td>
      <td className="mail-subject">{mail.subject}</td>
      <td className="mail-sent-at">{formattedSentAt}</td>
      <td>
        <MailToolBar mailId={mail.id} onClick={handleToolbarClick} />
      </td>
    </tr>
  )
}
