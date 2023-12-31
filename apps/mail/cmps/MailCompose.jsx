import { mailService } from '../services/mail.service.js'
const { useState, useEffect } = React
const { useNavigate } = ReactRouterDOM

export function MailCompose({ onShowCompose, onSendMail }) {
  const [mailToSend, setMailToSend] = useState(mailService.getEmptyMail())
  const navigate = useNavigate()

  function handleChange({ target }) {
    const field = target.name
    let value = target.value

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value || ''
        break

      case 'checkbox':
        value = target.checked
        break

      default:
        break
    }

    setMailToSend((prevMailToSend) => ({ ...prevMailToSend, [field]: value }))
  }

  function onSubmitMail(ev) {
    ev.preventDefault()

    // Set the current timestamp to mailToSend.sentAt
    const updatedMailToSend = {
      ...mailToSend,
      sentAt: Date.now(), // This sets the current timestamp
      from: 'user@appsus.com',
    }

    mailService
      .save(updatedMailToSend)
      .then(() => {
        // showSuccessMsg(`Mail sent successfully`)
        onSendMail()
        navigate('/mail')
      })
      .catch((err) => {
        console.log('err:', err)
        // showErrorMsg("Couldn't send mail")
      })
  }

  return (
    <section className="mail-compose">
      <div className="mail-compose-header">
        <span>New Message</span>
        <button className="btn btn-close-compose" onClick={onShowCompose}>
          X
        </button>
      </div>
      <form className="form-mail-compose" onSubmit={onSubmitMail}>
        <input
          className="input-to"
          type="text"
          name="to"
          id="to"
          value={mailToSend.to}
          onChange={handleChange}
          placeholder="To"
          required
        />

        <input
          className="input-subject"
          type="text"
          name="subject"
          id="subject"
          value={mailToSend.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />

        <textarea
          className="textarea-body"
          name="body"
          id="body"
          value={mailToSend.body}
          onChange={handleChange}
          required
        ></textarea>

        <button className="btn btn-submit-mail" type="submit">
          Send
        </button>
      </form>
    </section>
  )
}
