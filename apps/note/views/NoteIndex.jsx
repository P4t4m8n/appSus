

import { NoteList } from "../cmps/NoteList.jsx"
import { noteService } from "../services/note.service.js"
import { NoteHeader } from '../cmps/NoteHeader.jsx'
const { useState, useEffect } = React

export function NoteIndex() {

    const [notes, setNotes] = useState(null)
    const [isAddedNote, setIsAddedNote] = useState(false)
    const [noteToEdit, setNoteToEdit] = useState(null)

    useEffect(() => {
        noteService.query()
            .then((notes) => setNotes(notes))
    }, [isAddedNote])

    if (!notes) return <div>Loading...</div>

    function onPin(noteId) {
        useEffect(() => {
            noteService.get(noteId)
                .then(note => setNoteToEdit(note))
                .then(prevNoteToEdit => ({ ...prevNoteToEdit, isPinned: true }))
        })
    }


    function onChgColor(noteId, color) {
        useEffect(() => {
            noteService.get(noteId)
                .then(note => setNoteToEdit(note))
                .then(prevNoteToEdit => ({ ...prevNoteToEdit, style: { bgc: color } }))
        })
    }

    function onEmail(noteId) {
        //link to emil with params
     }
    function onEdit(noteId) { }
    function onDelete(noteId) { }

    return (
        <section className="notes-index">
            <NoteHeader setIsAddedNote={setIsAddedNote}  ></NoteHeader>
            <NoteList notes={notes} onPin={onPin} onChngColor={onChgColor} onEmail={onEmail} onEdit={onEdit} onDelete={onDelete}></NoteList>
        </section>
    )
}
