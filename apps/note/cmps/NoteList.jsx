const { Link } = ReactRouterDOM
const { useState, useEffect } = React


import { NoteTxtPreview } from './NoteTxtPreview.jsx'
import { NoteImgPreview } from './NoteImgPreview.jsx'
import { NoteVideoPreview } from './NoteVideoPreview.jsx'
import { NoteTodosPreview } from './NoteTodosPreview.jsx'
import { NoteButtons } from './NoteButtons.jsx'


export function NoteList({ notes, onPin, onChgColor, onEmail, onEdit, onDelete }) {

    const [cmpType, setCmpType] = useState('Note-Txt')


    // console.log("notes:", notes[0].style.backgroundColor)
    return (
        <ul className="note-list">
            {
                notes.map(note =>
                    <li key={note.id} style={{ backgroundColor: note.style.backgroundColor }}>
                        <DynmicNoteCmp cmpType={note.type} info={note.info} />
                        <NoteButtons onPin={onPin} onChngColor={onChgColor} onEmail={onEmail} onEdit={onEdit} onDelete={onDelete} note={note}></NoteButtons>
                    </li>
                )
            }
        </ul>
    )
}

function DynmicNoteCmp(props) {
    // console.log("props:", props)
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
