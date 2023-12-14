const { useState, useEffect } = React

export function NoteFilter({ filterBy, onSetFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange(ev) {
        let value = ev.target.value
        console.log("value:", value)
        setFilterByToEdit(value)


    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        console.log("filterByToEdit:", filterByToEdit)
        onSetFilterBy(filterByToEdit)
    }



    return (
        <form className="filter" onSubmit={onSubmitFilter}>
            <select onChange={handleChange}>
                <option value=''>None</option>
                <option value='note-txt'>Text Note</option>
                <option value='note-img'>Image Note</option>
                <option value='note-video'>Video Note</option>
                <option value='note-todos'>ToDo Note</option>
            </select>
            <button>Filter</button>
        </form>
    )
}
