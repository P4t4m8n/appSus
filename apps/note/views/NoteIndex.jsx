

import { NoteList } from "../cmps/NoteList.jsx"
import { noteService } from "../services/note.service.js"
import { NoteFilter } from "../cmps/NoteFilter.jsx"
import { NoteEdit } from "../cmps/NoteEdit.jsx"

const { useState, useEffect } = React

export function NoteIndex() {

    const [notes, setNotes] = useState(null)
    const [isAddedNote, setIsAddedNote] = useState(false)
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())

    useEffect(() => {
        noteService.query(filterBy)
            .then((notes) => setNotes(notes))
    }, [isAddedNote,filterBy])

    if (!notes) return <div>Loading...</div>

    function togglePin(noteId) {
        noteService.get(noteId)
            .then(note => {
                note.isPinned = !note.isPinned
                noteService.save(note).then(() => setFilterBy(''))

            })
    }

    function onEmail(noteId) { }

    function onSetFilterBy(filterBy) {
        console.log("filterBy:", filterBy)
        setFilterBy(filterBy)
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
            <section className="note-header">
                <div className="note-new">
                    <NoteEdit setIsAddedNote={setIsAddedNote} note={noteService.getNewNote()} />
                </div>
                <NoteFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy}></NoteFilter>
            </section>
            <NoteList setIsAddedNote={setIsAddedNote} notes={notes} togglePin={togglePin} onEmail={onEmail} onEdit={onEdit} onDelete={onDelete}></NoteList>
        </section>
    )
}
