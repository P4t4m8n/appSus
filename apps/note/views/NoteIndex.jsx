

import { NoteList } from "../cmps/NoteList.jsx"
import { noteService } from "../services/note.service.js"
import { NoteHeader } from '../cmps/NoteHeader.jsx'
const { useState, useEffect } = React

export function NoteIndex() {

    const [notes, setNotes] = useState(null)

    useEffect(() => {
        noteService.query()
            .then((notes) => setNotes(notes))
    }, [])

    if (!notes) return <div>Loading...</div>

    // function addNote(note) {
    //     console.log("note:", note)

    // }

    return (
        <section className="notes-index">
            <NoteHeader  ></NoteHeader>
            <NoteList notes={notes}></NoteList>
        </section>
    )
}
