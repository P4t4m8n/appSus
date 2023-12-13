import { noteService } from "../services/note.service.js"
import { NoteTxtAdd } from "./NoteAdd/NoteTxtAdd.jsx"
import { NoteImgAdd } from "./NoteAdd/NoteImgAdd.jsx"
import { NoteVideoAdd } from "./NoteAdd/NoteVideoAdd.jsx"
import { NoteTodosAdd } from "./NoteAdd/NoteTodosAdd.jsx"

const { useEffect, useState } = React

export function NoteHeader({ setIsAddedNote }) {

    const [noteToEdit, setNoteToEdit] = useState(noteService.getNewNote())
    const [cmpType, setCmpType] = useState('note-txt')


    function handleChange({ target }) {
        const field = target.name
        let value = { txt: target.value }

        setNoteToEdit(prevNote => ({ ...prevNote, info: value }))
    }


    function onSubmitNote(ev, obj = {}) {
        ev.preventDefault()
        if (cmpType !== 'note-txt') {
            console.log("obj:", obj)
            let value = { txt: obj.txt, todos: obj.todos }
            setNoteToEdit(prevNote =>
                ({ ...prevNote, info: obj, type: cmpType }))

        }

        console.log("noteToEdit:", noteToEdit)
        noteService
            .save(noteToEdit)
            .then(() => {
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
            {console.log(noteToEdit)}
            <DynmicNoteAddCmp cmpType={cmpType} handleChange={handleChange} onSubmitNote={onSubmitNote} info={noteToEdit.info} />
            {(cmpType === 'note-txt') &&
                <section className="add-note-btns">
                    <button onClick={() => setCmpType('note-todos')}>todo</button>
                    <button onClick={() => setCmpType('note-img')}>img</button>
                    <button onClick={() => setCmpType('note-video')}>video</button>
                </section>
            }
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