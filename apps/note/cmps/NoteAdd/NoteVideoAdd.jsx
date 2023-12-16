

export function NoteVideoAdd({ onSubmitNote, handleChangeUrl, note }) {

    return (
        <section className="note-video-con">
            <form className="note-add-video" >
                <textarea
                    value={note.info.txt}
                    onChange={handleChangeUrl}
                    onInput={(el)=>autoResize(el)}

                    type='text'
                    placeholder='video title'
                    id='txt'
                    name='txt'
                    required>
                </textarea>
                <label htmlFor='urlYouTube'></label>
                <input
                    value={note.info.url}
                    onChange={handleChangeUrl}
                    type='text'
                    placeholder='video link'
                    id='urlYouTube'
                    name='urlYouTube'
                    required>
                </input>
            </form>
            <iframe className="iframe-edit" src={note.info.url}></iframe>
            <div className="video-edit-btns">

                <button>
                    <label htmlFor="file">
                        <img src='assets\img\upload50.png'></img>
                    </label>
                </button>
                <button onClick={onSubmitNote}>{<img src='assets\img\save50.png'></img>}</button>
                <button onClick={handleChangeUrl} value='empty'>{<img src='assets\img\remove50.png'></img>}</button>
            </div>
        </section>
    )
}