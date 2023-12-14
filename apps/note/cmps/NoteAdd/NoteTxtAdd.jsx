const { useState } = React

export function NoteTxtAdd({ onSubmitNote, handleChange, note }) {
   

    return (
        <form className="note-add-txt" onSubmit={onSubmitNote} >
            <label htmlFor='txt'></label>
            <input
                value={note.info.txt}
                onChange={handleChange}
                type='text'
                placeholder='Take a Note'
                id='txt'
                name='txt'
                required>
            </input>
            <button>Save</button>
        </form>
    )
}