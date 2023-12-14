const { Link } = ReactRouterDOM
const { useState, useEffect } = React


import { NoteTxtPreview } from './NoteTxtPreview.jsx'
import { NoteImgPreview } from './NoteImgPreview.jsx'
import { NoteVideoPreview } from './NoteVideoPreview.jsx'
import { NoteTodosPreview } from './NoteTodosPreview.jsx'
import { NoteButtons } from './NoteButtons.jsx'
import { NoteEdit } from './NoteEdit.jsx'
import { noteService } from '../services/note.service.js'

export function NoteList({ setIsAddedNote, notes, togglePin, onEmail, onEdit, onDelete }) {

    return (
        <ul className="note-list">
            <li>  <NoteEdit setIsAddedNote={setIsAddedNote} note={noteService.getNewNote()} /></li>
            {
                notes.map(note =>
                    <li key={note.id} style={{ backgroundColor: note.style.backgroundColor }}>
                        <DynmicNoteCmp isEdit={note.isEdit} cmpType={note.type} info={note.info} note={note} />
                        {(!note.isEdit) && <NoteButtons togglePin={togglePin}  onEmail={onEmail} onEdit={onEdit} onDelete={onDelete} note={note}></NoteButtons>}
                    </li>
                )
            }
        </ul >
    )
}

function DynmicNoteCmp(props) {
    // console.log("props:", props)
    if (props.isEdit) return <NoteEdit {...props}></NoteEdit>

    switch (props.cmpType) {
        case 'note-txt':
            return <NoteTxtPreview {...props.info} />
        case 'note-img':
            return <NoteImgPreview {...props.info} />
        case 'note-video':
            return <NoteVideoPreview {...props.info} />
        case 'note-todos':
            return <NoteTodosPreview {...props.info} />

        default:
            break;
    }
}
