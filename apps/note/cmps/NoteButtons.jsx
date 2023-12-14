

export function NoteButtons({ onPin, onChgColor, onEmail, onEdit, onDelete, note }) {


    return (
        <section className="note-btns">
            <button onClick={() => onPin(note.id)}>{<img src='assets\img\icons8-pin-48.png'></img>}</button>
            <button onClick={() => onChgColor(note.id)}>{<img src='assets\img\icons8-paint-palette-48.png'></img>}</button>
            <button onClick={() => onEmail(note.id)}>{<img src='assets\img\icons8-email-48.png'></img>}</button>
            <button onClick={() => onEdit(note.id)}>{<img src='assets\img\icons8-pen-squared-48.png'></img>}</button>
            <button onClick={() => onDelete(note.id)}>{<img src='assets\img\icons8-trash-48.png'></img>}</button>
        </section>
    )
}