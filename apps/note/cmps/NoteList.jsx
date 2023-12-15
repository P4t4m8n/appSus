

import { NoteManager } from './NoteManager.jsx'

export function NoteList({ notes, onDelete, togglePin, setIsAddedNote }) {
    var t = ''

    return (
        <ul className="note-list">
            {
                notes.map(note => {
                    const t = (note.isEdit) ? 'test' : ''
                    return (
                        <li key={note.id} className={`${t} ${'note'}`} style={{ borderColor: note.style.backgroundColor }}>
                            <NoteManager setIsAddedNote={setIsAddedNote} togglePin={togglePin} onDelete={onDelete} note={note} />
                        </li>
                    )
                })
            }
        </ul >
    )
}

