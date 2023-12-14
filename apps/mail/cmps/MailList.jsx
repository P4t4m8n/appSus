import { MailPreview } from './MailPreview.jsx'
const { useNavigate, useParams } = ReactRouterDOM

export function MailList({ mails }) {
  const navigate = useNavigate()

  function navigateToMailDetails(mailId) {
    // ;<Link to={`/book/${book.id}`}>Details</Link>
    navigate(`/mail/${mailId}`)
  }

  return (
    <main className="mail-list">
      <table>
        <tbody>
          {mails.map((mail) => (
            <MailPreview
              key={mail.id}
              mail={mail}
              navigateToMailDetails={() => navigateToMailDetails(mail.id)}
            />
          ))}
        </tbody>
      </table>
    </main>

    // <ul className="mail-list">
    //   {mails.map((mail) => (
    //     <li key={mail.id}>
    //       <MailPreview mail={mail} />
    //     </li>
    //   ))}
    // </ul>
  )
}
