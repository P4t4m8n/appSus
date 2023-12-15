

export function NoteVideoAdd({ onSubmitNote, handleChangeUrl, note }) {
 
    return (
        <section className="note-video-con">
            <form className="note-add-video" >
                <label htmlFor='txt'></label>
                <input
                    value={note.info.txt}
                    onChange={handleChangeUrl}
                    type='text'
                    placeholder='video title'
                    id='txt'
                    name='txt'
                    required>
                </input>
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
            <button onClick={onSubmitNote}>{<img src='assets\img\save50.png'></img>}</button>
            <iframe src={note.info.url}></iframe>
        </section>
    )
}