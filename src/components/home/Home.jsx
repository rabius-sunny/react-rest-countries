import React, { useEffect, useState } from 'react'
import Display from '../displayCountry/Display'

function Home() {

    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => setCountry(data))
    }, [])

    const Spinner = () => {
        return (
            <div className="text-center pb-5">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Please wait...</p>
            </div>
        )
    }

    return (
        <div className="row">
            <div className="intro">
                <h1>Welcome to Rest Countries</h1>
                <p>Here you will find all the countries around the world and informations of individual country.</p>
            </div>
            {
                country.length === 0 ? <Spinner /> : country.map(data => <Display data={data} key={data.numericCode} />)
            }
        </div>
    )
}

export default Home
