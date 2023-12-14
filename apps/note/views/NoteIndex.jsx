

import { NoteList } from "../cmps/NoteList.jsx"
import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React

export function NoteIndex() {

    const [notes, setNotes] = useState(null)
    const [isAddedNote, setIsAddedNote] = useState(false)

    useEffect(() => {
        noteService.query()
            .then((notes) => setNotes(notes))
    }, [isAddedNote])

    if (!notes) return <div>Loading...</div>

    function togglePin(noteId) {
        noteService.get(noteId)
            .then(note => {
                note.isPinned = !note.isPinned
                noteService.save(note).then(setIsAddedNote(IsAddedNote => !IsAddedNote))

            })
    }

    function onEmail(noteId) {

    }
    function onEdit(noteId) {
        noteService.get(noteId)
            .then(note => {
                console.log("note:", note)
                note.isEdit = !note.isEdit
                noteService.save(note).then(setIsAddedNote(IsAddedNote => !IsAddedNote))
            })
    }

    function onDelete(noteId) {
        noteService.remove(noteId).then(() => {
            setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
        })
    }

    return (
        <section className="notes-index">

            <NoteList setIsAddedNote={setIsAddedNote} notes={notes} togglePin={togglePin} onEmail={onEmail} onEdit={onEdit} onDelete={onDelete}></NoteList>
        </section>
    )
}
