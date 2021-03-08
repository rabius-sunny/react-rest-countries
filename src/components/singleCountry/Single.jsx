import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Single() {

    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${id}`)
            .then(response => response.json())
            .then(data => setData(data[0]))
    }, [id])
    console.log(data)
    const NotFound = () => {
        return (
            <div className="text-center text-danger bg-info p-2">
                <h2>Sorry, No country found on your searched key. Please search again with actual key.</h2>
            </div>
        )
    }

    // const { name, flag, capital, population, region, timezones, demonym } = data

    return (
        <div>
            <h1 className="p-3 text-center">Rest Countries</h1>
            {
                data === undefined ? <NotFound /> :
                    <div>
                        <img src={data.flag} width="100%" style={{ border: '2px solid darkblue', borderRadius: '10px' }} alt="flag" />
                        <div className="info">
                            <h1>{data.name}</h1>
                            <p>Capital : {data.capital}</p>
                            <p>Population : {data.population}</p>
                            <p>Region : {data.region}</p>
                            <p>Timezone : {data.timezones}</p>
                            <p>Nationality : {data.demonym}</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Single

