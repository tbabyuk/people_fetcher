import React, {useState} from 'react'

function Search(props) {

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetch(text)
    }

    const searchInput = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="container my-5">
            <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={text} onChange={(e) => searchInput(e)} placeholder="User's Name" className="w-100"></input>
            <button type="submit" className="btn btn-secondary mt-3 w-100">Search User</button>
            </form>
        </div>
    )
}

export default Search
