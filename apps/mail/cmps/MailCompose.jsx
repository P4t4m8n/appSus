import { mailService } from '../services/mail.service.js'
const { useState, useEffect } = React
const { useNavigate } = ReactRouterDOM

export function MailCompose() {
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
    mailService
      .save(mailToSend)
      .then(() => {
        // showSuccessMsg(`Mail sent successfully`)
        navigate('/mail')
      })
      .catch((err) => {
        console.log('err:', err)
        // showErrorMsg("Couldn't send mail")
      })
  }

  function onBack() {
    navigate('/mail')
  }

  return (
    <section className="mail-compose">
      <form className="form-mail-compose" onSubmit={onSubmitMail}>
        <label htmlFor="to">To: </label>
        <input
          type="text"
          name="to"
          id="to"
          value={mailToSend.to}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject">Subject: </label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={mailToSend.subject}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Mail</button>
      </form>
      <button onClick={onBack}>Back</button>
    </section>
  )
}
