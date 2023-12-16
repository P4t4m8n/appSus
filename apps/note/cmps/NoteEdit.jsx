import { noteService } from '../services/note.service.js'
import { NoteTxtAdd } from './NoteAdd/NoteTxtAdd.jsx'
import { NoteImgAdd } from './NoteAdd/NoteImgAdd.jsx'
import { NoteVideoAdd } from './NoteAdd/NoteVideoAdd.jsx'
import { NoteTodosAdd } from './NoteAdd/NoteTodosAdd.jsx'
import { showSuccessMsg } from "../../../services/event-bus.service.js"
import { showErrorMsg } from "../../../services/event-bus.service.js"



const { useEffect, useState, Fragment, useRef } = React

export function NoteEdit({ setIsAddedNote, note, setIsEdit, setNote,setFoucs }) {
  // const set = useRef(note)
  // console.log("setNote:", set)
  const [noteToEdit, setNoteToEdit] = useState(note)
  const [cmpType, setCmpType] = useState(note.type)


  function handleChange({ target }) {
    let value = target.value
    let info = { ...noteToEdit.info, txt: value }
    setNoteToEdit((prevNote) => ({ ...prevNote, info }))
  }


  function handleChangeUrl({ target }) {
    var field = target.name
    var value = ''

    if (field === 'url') value = URL.createObjectURL(target.files[0])

    else if (field === 'urlYouTube') {
      field = 'url'
      value = target.value
    }
    else if (field === '') {
      field = 'url'
      value = 'assets/img/noimage100.png'
    }

    else value = target.value

    let info = { ...noteToEdit.info, [field]: value }
    setNoteToEdit(prevNote => ({ ...prevNote, info, type: cmpType }))
  }

  function handleChangeTodos({ target }) {
    let field = target.name
    let value
    let info

    if (field === 'txt') value = target.value
    else {
      value = { txt: target.value }
      value = noteToEdit.info.todos.toSpliced(field, 1, value)
      field = 'todos'
      console.log('value:', value)
      console.log('value[value.length - 1]:', value[value.length - 1])
      if (value[value.length - 1].txt !== 'Im a new Todo')
        value.push({ txt: 'Im a new Todo' })
    }

    info = { ...noteToEdit.info, [field]: value }

    setNoteToEdit((prevNote) => ({ ...prevNote, info, type: cmpType }))
  }

  function onSubmitNote(ev) {
    ev.preventDefault()
    noteToEdit.isEdit = false
    noteService
      .save(noteToEdit)
      .then(() => {
        if (noteToEdit.id !== '') {
          setIsEdit(false)
          setNote(noteToEdit)
          console.log('1')
        } else {
          setIsAddedNote((prev) => !prev)
          setNoteToEdit(noteService.getNewNote())
        }
        showSuccessMsg(`Note successfully Saved!`)
      }).catch(err => {
        showErrorMsg(`Blame Yonatan`)
        console.log('err:', err)
      })
  }
  // function onChgColor(ev) {
  //   ev.preventDefault()
  //   setNoteToEdit(prevNote => {
  //     const updatedNote = { ...prevNote, style: { ...prevNote.style, backgroundColor: ev.target.value } }
  //     return updatedNote
  //   })

  // }

  function removeTodo(ev, idx) {
    ev.preventDefault()

    var value = noteToEdit.info.todos.toSpliced(idx, 1)

    if (value.length === 0) value.push({ txt: 'Im a new Todo' })
    var info = { ...noteToEdit.info, todos: value }
    setNoteToEdit((prevNote) => ({ ...prevNote, info }))
  }

  function autoResize({ target }) {
    target.style.height = 'auto'
    target.style.height = target.scrollHeight + 'px'
  }




  return (
    <Fragment >
      <DynmicNoteAddCmp cmpType={cmpType} className="editClass" onSubmitNote={onSubmitNote} note={noteToEdit}
        setNoteToEdit={setNoteToEdit} autoResize={autoResize} removeTodo={removeTodo} handleChange={handleChange} handleChangeUrl={handleChangeUrl} handleChangeTodos={handleChangeTodos} />
      {
        // <div className="dropdown">
        //   <button className="dropbtn">Select Note Type</button>
        //   <div className="dropdown-content">
        //     <button onClick={() => setCmpType('note-txt')}>Text Note</button>
        //     <button onClick={() => setCmpType('note-todos')}>Todo Note</button>
        //     <button onClick={() => setCmpType('note-img')}>Image Note</button>
        //     <button onClick={() => setCmpType('note-video')}>Video Note</button>
        //   </div>
        // </div>

        <section className="add-note-btns ">
          <button onClick={() => setCmpType('note-txt')}>{<img src='assets\img\txt.png'></img>}</button>
          <button onClick={() => setCmpType('note-todos')}>{<img src='assets\img\todo.png'></img>}</button>
          <button onClick={() => setCmpType('note-img')}>{<img src='assets\img\img.png'></img>}</button>
          <button onClick={() => setCmpType('note-video')}>{<img src='assets\img\video.png'></img>}</button>
          {/* <button className="color-sec">
            <label className="color-btn" htmlFor="favcolor">{<img src='assets\img\color.png'></img>}</label >
            <input onChange={onChgColor} type="color" id="favcolor" name="favcolor" value="#ff0000" hidden></input>
           </button> */}
          <button onClick={() => setIsEdit(false)}>{<img src='assets\img\edit50.png'></img>}</button>
        </section>
      }
    </Fragment>

  )
}

function DynmicNoteAddCmp(props) {
  switch (props.cmpType) {
    case 'note-txt':
      return <NoteTxtAdd {...props} />
    case 'note-img':
      return <NoteImgAdd {...props} />
    case 'note-video':
      return <NoteVideoAdd {...props} />
    case 'note-todos':
      return <NoteTodosAdd {...props} />

    default:
      break
  }
}
function fixUrl(url) {
  const regex = /youtu\.be\/([^\?]+)/
  return url.replace(regex, 'www.youtube.com/embed/$1')
}
