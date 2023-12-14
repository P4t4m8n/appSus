import { NoteTxtAdd } from "./NoteTxtAdd.jsx"
const { useEffect, useState } = React


export function NoteTodosAdd({ onSubmitNote, info }) {

    const [todos, setTodos] = useState([{ txt: 'List item' }])
    const [title, setTitle] = useState(info.txt)
    // console.log("todos:", todos)
    if (todos[todos.length - 1].txt !== 'List item') setTodos(todos.push({ txt: 'List item' }))



    function handleChange({ target }) {
        const field = target.name
        let value = {}
        if (field === 'title') setTitle(target.value)
        else {
            value = { txt: target.value }
            setTodos(todos.toSpliced(field, 1, value))
        }
    }



    return (
        <ul className="note-add-todo">
            <li>
                <form className="note-add-txt" >
                    <label htmlFor='title'></label>
                    <input
                        value={title}
                        onChange={handleChange}
                        type='text'
                        placeholder='Take a Note'
                        id='title'
                        name='title'
                        required>
                    </input>

                </form>
            </li>
            {
                todos.map((todo, idx) =>
                    <li key={idx}>
                        {console.log()}
                        <form className="note-add-txt"  >
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
                        </form>
                    </li>
                )

            }
            {/* <button onClick="onAddTodo()">Add</button> */}
            <button onClick={() => onSubmitNote(event, { todos: todos, txt: title })}>Save</button>
        </ul>
    )
}