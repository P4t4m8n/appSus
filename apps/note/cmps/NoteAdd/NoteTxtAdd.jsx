

export function NoteTxtAdd({ onSubmitNote, handleChange, note,autoResize }) {
   

    return (
        <form className="note-add-txt" onSubmit={onSubmitNote} >
            <textarea 
                value={note.info.txt}
                onChange={handleChange}
                onInput={(el)=>autoResize(el)}
                type='text'
                placeholder='Take a Note'
                id='txt'
                name='txt'
                required>
            </textarea>
            <button className="save-btn">{<img src='assets\img\save50.png'></img>}</button>
        </form>
    )
}