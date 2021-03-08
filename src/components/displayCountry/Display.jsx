import React from 'react'
import { Link } from 'react-router-dom'

function Display(props) {
    const { name, capital, flag } = props.data
    return (
        <div className="col-md-4">
            <Link to={"/country/" + name}>
                <div className="ccCard">
                    <img src={flag} width="50px" height="35px" alt="flag" />
                    <div>
                        <p style={{ fontSize: '20px', fontWeight: '600' }}>{name}</p>
                        <p>Capital: {capital}</p>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Display
