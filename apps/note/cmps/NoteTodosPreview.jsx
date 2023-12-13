

export function NoteTodosPreview({ title, todos }) {
    console.log("todos:", todos)
    console.log("title:", title)

    return (
        <div className="note-todos-con">
            <header>{title}</header>
            <ul className="todos-list">
                {
                    todos.map(todo =>
                        <li key={todo.txt} >
                            <p>{todo.txt}</p>
                            <button>X</button>
                        </li>)
                }
            </ul>
        </div>
    )
}

