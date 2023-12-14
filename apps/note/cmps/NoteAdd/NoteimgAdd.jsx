

export function NoteImgAdd({ handleChangeImg, onSubmitNote, note }) {


    return (
        <div>
            <form className="note-add-txt" >
                <label htmlFor='title'></label>
                <input
                    value={note.info.txt}
                    onChange={handleChangeImg}
                    type='text'
                    placeholder='Take a Note'
                    id='title'
                    name='txt'
                    required>
                </input>
            </form>



            <input
                type="file"
                name="url"
                // value={note.info.url}
                onChange={handleChangeImg}
            />
            <button onClick={onSubmitNote}>Save</button>
        </div>
    );

}