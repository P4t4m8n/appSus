const { Link } = ReactRouterDOM
const { useState, useEffect } = React


import { NoteTxtPreview } from './NoteTxtPreview.jsx'
import { NoteImgPreview } from './NoteImgPreview.jsx'
import { NoteVideoPreview } from './NoteVideoPreview.jsx'
import { NoteTodosPreview } from './NoteTodosPreview.jsx'


export function NoteList({ notes }) {
    // console.log("notes:", notes)

    const [cmpType, setCmpType] = useState('Note-Txt')

    return (
        <ul className="note-list">
            {
                notes.map(note => 
                    <li key={note.id} >
                        <DynmicNoteCmp cmpType={note.type} info={note.info} />
                        <section>
                            <button >a</button>
                            <button >b</button>
                            <button >c</button>
                            <button>d</button>
                            <button>e</button>
                        </section>
                    </li>
                )
            }
        </ul>
    )
}

function DynmicNoteCmp(props) {
    console.log("props:", props)
    switch (props.cmpType) {
        case 'note-txt':
            return <NoteTxtPreview {...props} />
        case 'note-img':
            return <NoteImgPreview {...props} />
        case 'note-video':
            return <NoteVideoPreview {...props} />
        case 'note-todos':
            return <NoteTodosPreview {...props} />

        default:
            break;
    }
}
