import React from 'react'

function User(props) {
    return (
        <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr"}} className="mx-auto">
            {props.users.map(user => {
                return (
                    <div key={user.id}>
                        <div className="card mb-5 border-0" style={{ width: "15rem" }}>
                            <img src={user.avatar_url} className="card-img-top rounded-circle w-75 mx-auto" alt={user.login} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{user.login}</h5>
                                    <a href={user.html_url} target="_blank" className="btn btn-primary w-100">Read More</a>
                                </div>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default User
