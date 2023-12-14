

export function NoteTodosPreview({ title: txt, todos }) {
    // console.log("todos:", todos)
    // console.log("title:", title)

    return (
        <div className="note-todos-con">
            <header>{txt}</header>
            <ul className="todos-list">
                {
                    todos.map((todo,idx )=>
                        <li key={idx} >
                            <p>{todo.txt}</p>
                            <button>X</button>
                        </li>)
                }
            </ul>
        </div>
    )
}

