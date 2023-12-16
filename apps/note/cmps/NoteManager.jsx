
import { NoteTxtPreview } from './NoteTxtPreview.jsx'
import { NoteImgPreview } from './NoteImgPreview.jsx'
import { NoteVideoPreview } from './NoteVideoPreview.jsx'
import { NoteTodosPreview } from './NoteTodosPreview.jsx'
import { NoteButtons } from './NoteButtons.jsx'
import { NoteEdit } from './NoteEdit.jsx'
import { noteService } from '../services/note.service.js'
import { NoteEditModal } from './NoteAdd/NoteEditModal.jsx'

const { useState, Fragment } = React

console.log('render')

export function NoteManager({ note, onDelete, onEmail, setIsAddedNote }) {

    const [isEdit, setIsEdit] = useState(false)
    const [currNote, setNote] = useState(note)
    console.log("currNote:", currNote)
    // const [chgColor, setChgColor] = useState(false)

    function togglePin() {
        currNote.isPinned = !currNote.isPinned
        noteService.save(currNote).then(() => setIsAddedNote((prev) => !prev))
    }


    //Modal handling
    const handleModalClose = () => {
        setIsEdit(false);
    };



    return (

        <li className="note" style={{ borderColor: currNote.style.backgroundColor }}>
            <DynmicNoteCmp  setNote={setNote} onClose={handleModalClose} isEdit={isEdit} cmpType={currNote.type} note={currNote} onDelete={onDelete} setIsEdit={setIsEdit} />
            {!isEdit && <NoteButtons togglePin={togglePin} onEmail={onEmail} setIsEdit={setIsEdit} onDelete={onDelete} note={currNote}></NoteButtons>}
        </li>
    )

    function DynmicNoteCmp(props) {
        console.log("props:", props)
        console.log("props:", props)
        // if (props.isEdit) return <NoteEditModal  {...props} />
        if (props.isEdit) return <NoteEdit  {...props} />

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

}