const { Link } = ReactRouterDOM
const { useState, useEffect } = React


import { NoteTxtPreview } from './NoteTxtPreview.jsx'
import { NoteImgPreview } from './NoteImgPreview.jsx'
import { NoteVideoPreview } from './NoteVideoPreview.jsx'
import { NoteTodosPreview } from './NoteTodosPreview.jsx'


export function NoteList({ notes }) {

    const [cmpType, setCmpType] = useState('Note-Txt')


    // console.log("notes:", notes[0].style.backgroundColor)
    return (
        <ul className="note-list">
            {
                notes.map(note =>
                    <li key={note.id} style={{ backgroundColor: note.style.backgroundColor }}>
                        <DynmicNoteCmp cmpType={note.type} info={note.info} />
                        <section className="note-btns">
                            <button>{<img src='assets\img\icons8-pin-48.png'></img>}</button>
                            <button>{<img src='assets\img\icons8-paint-palette-48.png'></img>}</button>
                            <button>{<img src='assets\img\icons8-email-48.png'></img>}</button>
                            <button>{<img src='assets\img\icons8-pen-squared-48.png'></img>}</button>
                            <button>{<img src='assets\img\icons8-trash-48.png'></img>}</button>
                        </section>
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
