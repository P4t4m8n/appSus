const { useState } = React

export function NoteImgAdd({ onSubmitNote, info }) {

    const [selectedImg, setSelectedImg] = useState(null)
    const [title, setTitle] = useState(info.txt)

    function handleChange({ target }) {
        setTitle(target.value)
    }

    return (
        <div>
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

            {
                selectedImg &&
                <div>
                    <img
                        alt="not found"
                        // width={"250px"}
                        src={selectedImg}
                    />
                    <button onClick={() => setSelectedImg(null)}>Remove</button>
                </div>
            }

            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImg(URL.createObjectURL(event.target.files[0]));
                }}
            />
             <button onClick={() => onSubmitNote(event, { url: selectedImg, txt: title })}>Save</button>
        </div>
    );

}