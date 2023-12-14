import { noteService } from "../services/note.service.js"
import { NoteTxtAdd } from "./NoteAdd/NoteTxtAdd.jsx"
import { NoteImgAdd } from "./NoteAdd/NoteImgAdd.jsx"
import { NoteVideoAdd } from "./NoteAdd/NoteVideoAdd.jsx"
import { NoteTodosAdd } from "./NoteAdd/NoteTodosAdd.jsx"

const { useEffect, useState } = React

export function NoteEdit({ setIsAddedNote, note }) {
    // console.log("note:", note)

    const [noteToEdit, setNoteToEdit] = useState(note)
    const [cmpType, setCmpType] = useState(note.type)

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

    function handleChange({ target }) {
        let value = target.value
        let info = { ...noteToEdit.info, txt: value }
        setNoteToEdit(prevNote => ({ ...prevNote, info }))
    }

    function handleChangeUrl({ target }) {
        var field = target.name
        var value = ''

        if (field === 'url') value = URL.createObjectURL(target.files[0])

        else if (field === 'urlYouTube') {
            field = 'url'
            value = target.value
        }

        else value = target.value
        let info = { ...noteToEdit.info, [field]: value }
        setNoteToEdit(prevNote => ({ ...prevNote, info, type: cmpType }))
    }

    function handleChangeTodos({ target }) {
        let field = target.name
        let value
        let info

        if (field === 'txt') value = target.value

        else {
            value = { txt: target.value }
            value = noteToEdit.info.todos.toSpliced(field, 1, value)
            field = 'todos'
            if (value[value.length - 1] !== 'Im a new Todo') value.push({ txt: 'Im a new Todo' })
        }

        info = { ...noteToEdit.info, [field]: value }

        setNoteToEdit(prevNote => ({ ...prevNote, info, type: cmpType }))
    }




    function onSubmitNote(ev) {
        ev.preventDefault()
        noteService
            .save(noteToEdit)
            .then(() => {
                setNoteToEdit(noteService.getNewNote())
                setIsAddedNote(IsAddedNote => !IsAddedNote)
                // showSuccessMsg(`Note saved successfully`)
                // navigate('/book')
                console.log('saved')
            })
            .catch(err => {
                console.log('err:', err)
                // showErrorMsg("Couldn't save Note")
            })
    }

    return (
        <section className="note-header">

            <DynmicNoteAddCmp cmpType={cmpType} onSubmitNote={onSubmitNote} note={noteToEdit}
                setNoteToEdit={setNoteToEdit} handleChange={handleChange} handleChangeUrl={handleChangeUrl} handleChangeTodos={handleChangeTodos} />
            {(cmpType === 'note-txt') &&
                <section className="add-note-btns">
                    <button onClick={() => setCmpType('note-todos')}>todo</button>
                    <button onClick={() => setCmpType('note-img')}>img</button>
                    <button onClick={() => setCmpType('note-video')}>video</button>
                </section>
            }
               <button onClick={() => onChgColor()}>{<img src='assets\img\icons8-paint-palette-48.png'></img>}</button>
        </section>
    )
}

function DynmicNoteAddCmp(props) {
    // console.log("props:", props)
    switch (props.cmpType) {
        case 'note-txt':
            return <NoteTxtAdd {...props} />
        case 'note-img':
            return <NoteImgAdd {...props} />
        case 'note-video':
            return <NoteVideoAdd {...props} />
        case 'note-todos':
            return <NoteTodosAdd {...props} />

        default:
            break;
    }
}
function fixUrl(url) {
    const regex = /youtu\.be\/([^\?]+)/
    return url.replace(regex, 'www.youtube.com/embed/$1');

}