import React from 'react'
import User from './User'

function Users(props) {
    return (
        <div className="container mt-5" >
            <User users={props.users}/>
        </div>
    )
}

export default Users
