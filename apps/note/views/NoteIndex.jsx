

import { NoteList } from "../cmps/NoteList.jsx"
import { noteService } from "../services/note.service.js"
const { useState, useEffect } = React

export function NoteIndex() {

    const [notes, setNotes] = useState(null)

    useEffect(() => {
        noteService.query()
            .then((notes) => setNotes(notes))
    }, [])

    if (!notes) return <div>Loading...</div>

    return (
        <section className="notes-index">
            <NoteList notes={notes}></NoteList>
        </section>
    )
}
