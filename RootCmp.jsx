const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './views/About.jsx'
import { Home } from './views/Home.jsx'
import { MailIndex } from './apps/mail/views/MailIndex.jsx'
import { NoteIndex } from './apps/note/views/NoteIndex.jsx'
import { MailDetails } from './apps/mail/views/MailDetails.jsx'
import { MailCompose } from './apps/mail/cmps/MailCompose.jsx'
import { UserMsg } from './views/UserMsg.jsx'
// TODO: Add Import UserMsg CMP
// TODO: IDs for routing
// TODO: Routing to edit mails/notes
// TODO: Add footer

export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mail/inbox" element={<MailIndex folder="inbox" />} />
          <Route path="/mail/sent" element={<MailIndex folder="sent" />} />
          <Route path="/mail" element={<MailIndex />} />
          <Route path="/mail/:mailId" element={<MailIndex />} />

          {/* <Route path="/mail/compose" element={<MailCompose />} /> */}
          <Route path="/note" element={<NoteIndex />} />
        </Routes>
        <UserMsg></UserMsg>
      </section>
    </Router>
  )
}
