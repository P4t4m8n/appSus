

export function NoteImgPreview({ url, title: txt }) {
  
    return (
        <div className="note-img-con">
            <header className="img-title">{txt}</header>
            <img src={url}></img>
        </div>
    )

}

