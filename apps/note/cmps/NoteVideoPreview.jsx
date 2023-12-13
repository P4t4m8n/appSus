
export function NoteVideoPreview({ url,  txt }) {
    return <section className="note-video-con">
        <header>{txt}</header>
        <iframe src={url}></iframe>
    </section>
}