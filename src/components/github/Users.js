import React from 'react'
import Search from '../Search'
import User from './User'

function Users(props) {
    return (
        <div className="container mt-5">
            <h3 className="text-center">Search Github Users by entering their name below:</h3>
            <Search fetch={props.fetch}/>
            <User users={props.users} />
        </div>
    )
}

export default Users
