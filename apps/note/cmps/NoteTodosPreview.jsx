const { Fragment } = React

export function NoteTodosPreview({ note }) {

    return (
        <Fragment>
            <p>{note.info.txt}</p>
            <ul className="todos-list">
                {
                    note.info.todos.map((todo, idx) =>
                        <li key={idx} >
                            <p>{todo.txt}</p>
                        </li>)
                }
            </ul>
        </Fragment>
    )
}

