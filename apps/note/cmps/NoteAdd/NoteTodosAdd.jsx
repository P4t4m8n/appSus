

export function NoteTodosAdd({ removeTodo, handleChangeTodos, onSubmitNote, note }) {

    return (
        <ul className="note-add-todo">
            <li>
                <form className="note-add-txt" >

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
                        <form className="note-add-txt" >
                            <input type="checkbox" id={'cb'} />
                            <label htmlFor={'cb'}>

                                {/* <label htmlFor='txt'></label> */}
                                <input
                                    value={todo.txt}
                                    onChange={handleChangeTodos}
                                    type='text'
                                    placeholder='Take a Note'
                                    id={idx}
                                    name={idx}
                                    required>
                                </input>
                                    <button value={idx} onClick={removeTodo}>{<img src='assets\img\trash50.png'></img>}</button>
                            </label>
                        </form>
                    </li>
                )

            }

            <button onClick={onSubmitNote}>{<img src='assets\img\save50.png'></img>}</button>
        </ul>
    )
}