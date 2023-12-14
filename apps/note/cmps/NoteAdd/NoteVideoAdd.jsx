const { useState } = React

export function NoteVideoAdd({ onSubmitNote }) {
    const [youTubeUrl, setYouTubeUrl] = useState('')
    const [title, setTitle] = useState('')

    function handleChange({ target }) {
        if (target.name === 'title')
            setTitle(target.value)
        else
            setYouTubeUrl(fixUrl(target.value))
    }

    function fixUrl(url) {
        const regex = /youtu\.be\/([^\?]+)/
        return url.replace(regex, 'www.youtube.com/embed/$1');

    }

    return (
        <section className="note-video-con">
            <form className="note-add-video" >
                <label htmlFor='title'></label>
                <input
                    value={title}
                    onChange={handleChange}
                    type='text'
                    placeholder='video title'
                    id='title'
                    name='title'
                    required>
                </input>
                <label htmlFor='youTubeUrl'></label>
                <input
                    value={youTubeUrl}
                    onChange={handleChange}
                    type='text'
                    placeholder='video link'
                    id='youTubeUrl'
                    name='youTubeUrl'
                    required>
                </input>
            </form>
            <button onClick={() => onSubmitNote(event, { url: youTubeUrl, txt: title })}>Save</button>
            <iframe src={youTubeUrl}></iframe>
        </section>
    )
}