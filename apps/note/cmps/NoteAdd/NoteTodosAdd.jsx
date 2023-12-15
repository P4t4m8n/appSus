

export function NoteTodosAdd({ removeTodo, handleChangeTodos, onSubmitNote, note, autoResize }) {

    return (
        <ul className="note-add-todo">

            <div className="todo-head-edit">
                <form>

                    <textarea
                        value={note.info.txt}
                        onChange={handleChangeTodos}
                        onInput={(el) => autoResize(el)}
                        type='text'
                        placeholder='Take a Note'
                        id='txt'
                        name='txt'
                        required>
                    </textarea>

                </form>
                <button onClick={onSubmitNote}>{<img src='assets\img\save50.png'></img>}</button>
            </div>



            <form className="note-add-txt" >
                {
                    note.info.todos.map((todo, idx) =>
                        <li className="todo" key={idx}>
                            {/* {console.log(idx)} */}
                            <input type="checkbox" id="cb" name="cb" />
                            <label htmlFor="cb">

                                {/* <label htmlFor='txt'></label> */}
                                <textarea
                                    value={todo.txt}
                                    onInput={(el) => autoResize(el)}
                                    onChange={handleChangeTodos}
                                    type='text'
                                    placeholder='Take a Note'
                                    id={idx}
                                    name={idx}
                                    required>
                                </textarea>
                            </label>
                            <button value={idx} onClick={(event)=>removeTodo(event,idx)}>{<img src='assets\img\trash50.png'></img>}</button>
                        </li>
                    )

                }
            </form>

        </ul >
    )
}