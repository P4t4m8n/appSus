

export function NoteImgPreview({ url, title }) {
  console.log("title:", title)
  console.log("url:", url)
  
    return (
        <div className="note-img-con">
            <header className="img-title">{title}</header>
            <img rel={url}></img>
        </div>
    )

}

