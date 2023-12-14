

export function NoteTodosAdd({ removeTodo, handleChangeTodos, onSubmitNote, note }) {

    return (
        <ul className="note-add-todo">
            <li>
                <form className="note-add-txt" >
                    <label htmlFor='txt'></label>
                    <input
                        value={note.info.txt}
                        onChange={handleChangeTodos}
                        type='text'
                        placeholder='Take a Note'
                        id='txt'
                        name='txt'
                        required>
                    </input>

                </form>
            </li>
            {
                note.info.todos.map((todo, idx) =>
                    <li key={idx}>
                        {/* {console.log(idx)} */}
                        <form className="note-add-txt"  >
                            <label htmlFor='txt'></label>
                            <input
                                value={todo.txt}
                                onChange={handleChangeTodos}
                                type='text'
                                placeholder='Take a Note'
                                id={idx}
                                name={idx}
                                required>
                            </input>
                        <button value={idx} onClick={removeTodo}>X</button>
                        </form>
                    </li>
                )

            }

            <button onClick={onSubmitNote}>Save</button>
        </ul>
    )
}