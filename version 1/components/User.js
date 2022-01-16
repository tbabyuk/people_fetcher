import React from 'react'

function User(props) {
    return (
        <div style={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr"}}>
            {props.users.users.map(user => {
                return (
                    <div key={user.id}>
                        <div className="card my-4" style={{ width: "16rem" }}>
                            <img src={user.avatar_url} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title text-center">{user.login}</h5>
                                <p className="card-text">Some quick example text to build on the card title.</p>
                                <a href={user.html_url} target="_blank" className="btn btn-primary d-block mx-auto">Read More</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default User
