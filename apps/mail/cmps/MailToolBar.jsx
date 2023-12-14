export function MailToolBar({ mailId, onClick }) {
  return (
    <div className="mail-toolbar" onClick={onClick}>
      <button className="btn btn-close-toolbar">❌</button>
      <button>💤</button>
    </div>
  )
}
