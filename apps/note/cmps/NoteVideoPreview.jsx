const { Fragment } = React


export function NoteVideoPreview({ note }) {
    return (
        <Fragment>
            <p>{note.info.txt}</p>
            <iframe src={note.info.url}></iframe>
        </Fragment>
    )
}