const { Fragment } = React

import { NoteManager } from './NoteManager.jsx'

export function NoteList({ notes, onDelete, togglePin, setIsAddedNote }) {
    var t = ''

    return (
        <ul className="note-list">
            {
                notes.map(note => {
                    const t = (note.isEdit) ? 'test' : ''
                    return (
                        <Fragment key={note.id} >
                            <NoteManager setIsAddedNote={setIsAddedNote} togglePin={togglePin} onDelete={onDelete} note={note} />
                        </Fragment>
                    )
                })
            }
        </ul >
    )
}

