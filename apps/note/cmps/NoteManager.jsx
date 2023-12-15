
import { NoteTxtPreview } from './NoteTxtPreview.jsx'
import { NoteImgPreview } from './NoteImgPreview.jsx'
import { NoteVideoPreview } from './NoteVideoPreview.jsx'
import { NoteTodosPreview } from './NoteTodosPreview.jsx'
import { NoteButtons } from './NoteButtons.jsx'
import { NoteEdit } from './NoteEdit.jsx'
import { noteService } from '../services/note.service.js'

const { useState, Fragment } = React

export function NoteManager({ note, onDelete, onEmail,setIsAddedNote }) {

    const [currNote, setNote] = useState(note)
    const [isEdit, setIsEdit] = useState(false)

    function togglePin() {
        currNote.isPinned = !currNote.isPinned
        noteService.save(currNote).then(() => setIsAddedNote((prev)=>!prev))
    }

    return (

        <Fragment>
            <DynmicNoteCmp setNote={setNote} isEdit={isEdit} cmpType={currNote.type} note={currNote} onDelete={onDelete} setIsEdit={setIsEdit} />
            {!isEdit && <NoteButtons togglePin={togglePin} onEmail={onEmail} setIsEdit={setIsEdit} onDelete={onDelete} note={currNote}></NoteButtons>}
        </Fragment>
    )

    function DynmicNoteCmp(props) {
        // console.log("props:", props)
        if (props.isEdit) return <NoteEdit {...props}></NoteEdit>

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