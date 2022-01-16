import React, { Fragment } from 'react'
import spinner from "../spinner.gif"


function Spinner() {
    return (
        <div className="text-center">
            <img src={spinner} />
        </div>
    )
}

export default Spinner
