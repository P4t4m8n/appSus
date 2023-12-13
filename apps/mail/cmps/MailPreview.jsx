export function MailPreview({ mail }) {
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

  return (
    <article className="mail-preview">
      <div className="container-mail-btns">
        <button>Select</button>
        <button>⭐</button>
      </div>
      <h2 className="mail-from">{mail.from}</h2>
      <h2 className="mail-subject">{mail.subject}</h2>
      <h2 className="mail-sent-at">{formattedSentAt}</h2>
    </article>
  )
}
