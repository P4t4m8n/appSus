import { NoteEdit } from '../NoteEdit.jsx'


export function NoteEditModal({ isEdit, onClose,setIsAddedNote, note, setIsEdit, setNote }) {
    console.log("isEdit:", isEdit);
    if (!isEdit) return

    return (
        <div className="modal-overlay">
            <div className="modal">
           
                <NoteEdit  setNote={setNote}  isEdit={isEdit}  note={note}  setIsEdit={setIsEdit}></NoteEdit>
                <button className="close-btn" onClick={onClose}>
                    Close
                </button>
              
            </div>
        </div>
    )
}
