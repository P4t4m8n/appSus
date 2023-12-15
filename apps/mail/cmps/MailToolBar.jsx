export function MailToolBar({ mailId, onClick }) {
  return (
    <div className="mail-toolbar" onClick={onClick}>
      <button className="btn btn-delete-toolbar">
        <img
          src="../../../appSus/assets/img/mail/ToolBar/delete-mail.svg"
          alt=""
        />
      </button>
      <button>💤</button>
    </div>
  )
}
