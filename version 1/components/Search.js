import React, { useState } from 'react'

function Search(props) {

    const [search, setSearch] = useState("")

    const onSubmit = e => {
        e.preventDefault();
        props.searchUsers(search);
        setSearch("");
    }

    return (
        <div className="container my-5 text-center">
            <form onSubmit={(e) => onSubmit(e)}>
                <input type="text" name="text" placeholder="Search Users..." value={search} onChange={e => setSearch(e.target.value)} className="col-12 mb-3" />
                <div>
                <button type="input" className="btn btn-primary col-12">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search
