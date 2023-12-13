
export function NoteVideoPreview({ url, title }) {
    return <section className="note-video-con">
        <header>{title}</header>
        <iframe src={url}></iframe>
    </section>
}