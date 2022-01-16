import React from 'react'

function Search(props) {
    return (
        <div className="container my-5">
            <input type="text" placeholder="User's Name" className="w-100"></input>
            <button onClick={props.fetch} className="w-100 mt-3 btn btn-secondary">Search Github User</button>
        </div>
    )
}

export default Search
