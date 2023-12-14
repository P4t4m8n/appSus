

export function NoteButtons({ isVisibale, togglePin, onEmail, onEdit, onDelete, note }) {
    var pinned = (note.isPinned) ? 'red' : ''
    var visibale = (isVisibale) ? 'visible' : 'hidden'

    return (
        <section className="note-btns" style={{ opacity : 0 }}>
            <button style={{ backgroundColor: pinned }} onClick={() => togglePin(note.id)}>{<img src='assets\img\icons8-pin-48.png'></img>}</button>
            <button onClick={() => onEmail(note.id)}>{<img src='assets\img\icons8-email-48.png'></img>}</button>
            <button onClick={() => onEdit(note.id)}>{<img src='assets\img\icons8-pen-squared-48.png'></img>}</button>
            <button onClick={() => onDelete(note.id)}>{<img src='assets\img\icons8-trash-48.png'></img>}</button>
        </section >
    )
}