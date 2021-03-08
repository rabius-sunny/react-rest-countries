import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/globe.png'

function Navigation() {

    const [keys, setKeys] = useState('')

    const handleSearch = e => {
        setKeys(e.target.value)
    }

    return (
        <div className="nav">
            <div className="d-flex align-items-center">
                <a href="/">
                    <img src={logo} width="40px" height="40px" alt="logo" />
                </a>
                <div>
                    <p>Rest Countries</p>
                    <p>by Rabius Sunny</p>
                </div>
            </div>
            <div>
                <input onChange={handleSearch} type="text" />
                <Link to={"/country/" + keys}><button className="myBtn">Search</button></Link>
            </div>
        </div>
    )
}

export default Navigation
