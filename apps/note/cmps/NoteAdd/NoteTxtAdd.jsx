

export function NoteTxtAdd({ onSubmitNote, handleChange, note }) {
   

    return (
        <form className="note-add-txt" onSubmit={onSubmitNote} >
            <label htmlFor='txt'></label>
            <textarea
                value={note.info.txt}
                onChange={handleChange}
                type='text'
                placeholder='Take a Note'
                id='txt'
                name='txt'
                required>
            </textarea>
            <button>Save</button>
        </form>
    )
}