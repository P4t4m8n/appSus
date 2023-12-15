const { Link } = ReactRouterDOM
const { useState, useEffect } = React


import { NoteTxtPreview } from './NoteTxtPreview.jsx'
import { NoteImgPreview } from './NoteImgPreview.jsx'
import { NoteVideoPreview } from './NoteVideoPreview.jsx'
import { NoteTodosPreview } from './NoteTodosPreview.jsx'
import { NoteButtons } from './NoteButtons.jsx'
import { NoteEdit } from './NoteEdit.jsx'
import { NoteManager } from './NoteManager.jsx'
import { noteService } from '../services/note.service.js'

export function NoteList({ setIsAddedNote, notes, togglePin, onEmail, onEdit, onDelete }) {

    // const [isVisibale, setIsVisibale] = useState(-1)


    return (
        <ul className="note-list">
            {
                notes.map(note =>
                    <li key={note.id} style={{ backgroundColor: note.style.backgroundColor }}>
                        <NoteManager onDelete={onDelete} note={note}/>
                    </li>
                    )
                // <li onMouseEnter={() => setIsVisibale(note.id)} onMouseLeave={() => setIsVisibale(-1)} key={note.id} style={{ backgroundColor: note.style.backgroundColor }}>
                //     <DynmicNoteCmp isEdit={note.isEdit} cmpType={note.type} note={note} togglePin={togglePin} onEmail={onEmail} onEdit={onEdit} onDelete={onDelete} />

                //     <NoteButtons togglePin={togglePin} onEmail={onEmail} onEdit={onEdit} onDelete={onDelete} note={note}></NoteButtons>
                // </li>
                // )
            }
        </ul >
    )
}

// function DynmicNoteCmp(props) {
//     // console.log("props:", props)
//     if (props.isEdit) return <NoteEdit {...props}></NoteEdit>

//     switch (props.cmpType) {
//         case 'note-txt':
//             return <NoteTxtPreview {...props} />
//         case 'note-img':
//             return <NoteImgPreview {...props} />
//         case 'note-video':
//             return <NoteVideoPreview {...props} />
//         case 'note-todos':
//             return <NoteTodosPreview {...props} />

//         default:
//             break;
//     }
// }
