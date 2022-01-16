import React from 'react'
import Search from './Search'
import User from './User'

function Users(props) {
    return (
        <div className="container">
            <Search fetch={props.fetch}/>
            <User users={props.users} />
        </div>
    )
}

export default Users
