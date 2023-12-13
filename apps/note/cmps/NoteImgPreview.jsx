

export function NoteImgPreview({ url, title }) {
  
    return (
        <div className="note-img-con">
            <header className="img-title">{title}</header>
            <img src={url}></img>
        </div>
    )

}

