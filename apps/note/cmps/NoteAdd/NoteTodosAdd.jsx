import { NoteTxtAdd } from "./NoteTxtAdd.jsx"


export function NoteTodosAdd({ handleChange, onSubmitNote, info }) {
 

    if (!info.todos) info.todos = [{ txt: 'List item' }]


    function handleChange({ target }) {
        // console.log("noteToEdit:", noteToEdit)
        console.log("target:", target)
        const field = target.name
        let value = {}
        switch (cmpType) {

            case 'note-todos':
                console.log(value)
            default:
                value = { txt: target.value }
                break;
        }
        setNoteToEdit(prevNote => ({ ...prevNote, info: value }))
    }


    return (
        <ul className="note-add-todo">
            <li>
                <form className="note-add-txt" onSubmit={onSubmitNote} >
                    <label htmlFor='txt'></label>
                    <input
                        value={info.txt}
                        onChange={handleChange}
                        type='text'
                        placeholder='Take a Note'
                        id='txt'
                        name='txt'
                        required>
                    </input>
                    <button>Save</button>
                </form>
            </li>
            {
                info.todos.map((todo, idx) =>
                    <li key={idx}>
                        <form className="note-add-txt" onSubmit={onSubmitNote} >
                            <label htmlFor='txt'></label>
                            <input
                                value={todo.txt}
                                onChange={handleChange}
                                type='text'
                                placeholder='Take a Note'
                                id={idx}
                                name={idx}
                                required>
                            </input>
                            <button>Save</button>
                        </form>
                    </li>
                )

            }
            <button onClick="onAddTodo()">Add</button>
        </ul>
    )
}