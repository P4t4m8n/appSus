

export function NoteButtons({togglePin, onEmail, setIsEdit, onDelete, note }) {
    var pinned = (note.isPinned) ? 'red' : ''
   

    return (
        <section className="note-btns" >
            <button style={{ backgroundColor: pinned }} onClick={() => togglePin()}>{<img src='assets\img\pin50.png'></img>}</button>
            <button onClick={() => onEmail(note.id)}>{<img src='assets\img\email50.png'></img>}</button>
            <button onClick={() => setIsEdit(true)}>{<img src='assets\img\edit50.png'></img>}</button>
            <button onClick={() => onDelete(note.id)}>{<img src='assets\img\trash50.png'></img>}</button>
        </section >
    )
}