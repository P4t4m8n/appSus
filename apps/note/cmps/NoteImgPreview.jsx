
const { Fragment } = React
export function NoteImgPreview({ note }) {
    console.log("note:", note)

    return (
        <Fragment>
            <p className="img-title">{note.info.txt}</p>
            <img src={note.info.url}></img>
        </Fragment>
    )
}

