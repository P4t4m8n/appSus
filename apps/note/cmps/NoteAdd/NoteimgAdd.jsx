

export function NoteImgAdd({ handleChangeUrl, onSubmitNote, note }) {


    return (
        <div className="note-add-img">
            <form className="note-add-txt" >
                <textarea
                    value={note.info.txt}
                    onChange={handleChangeUrl}
                    onInput={(el)=>autoResize(el)}
                    type='text'
                    placeholder='Take a Note'
                    id='txt'
                    name='txt'
                    required>
                </textarea>
            </form>

            <img src={note.info.url} ></img>

            <input
                type="file"
                name="url"
                id='file'
                // value={note.info.url}
                hidden
                onChange={handleChangeUrl}
            />
            <div className="note-img-edit">

                    <button>
                <label htmlFor="file">
                        <img src='assets\img\upload50.png' alt='assets/img/noimage100.png'></img>
                </label>
                    </button>
                <button onClick={onSubmitNote}>{<img src='assets\img\save50.png'></img>}</button>
                <button onClick={handleChangeUrl} value='empty'>{<img src='assets\img\remove50.png'></img>}</button>
            </div>
        </div>
    );

}