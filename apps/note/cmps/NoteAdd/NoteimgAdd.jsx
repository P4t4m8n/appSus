

export function NoteImgAdd({ handleChangeUrl, onSubmitNote, note }) {


    return (
        <div>
            <form className="note-add-txt" >
                <label htmlFor='txt'></label>
                <input
                    value={note.info.txt}
                    onChange={handleChangeUrl}
                    type='text'
                    placeholder='Take a Note'
                    id='txt'
                    name='txt'
                    required>
                </input>
            </form>

            <input
                type="file"
                name="url"
                // value={note.info.url}
                onChange={handleChangeUrl}
            />
            <button onClick={onSubmitNote}>{<img src='assets\img\save50.png'></img>}</button>
        </div>
    );

}