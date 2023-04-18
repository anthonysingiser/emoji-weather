import axios from "axios";
import { useState, useEffect } from "react";

export default function GetCity(props) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [cityName, setCityName] = useState(null)

    useEffect(() => {
        axios(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${props.lat},${props.long}&result_type=locality&key=AIzaSyBUVgdsblqcdtVgY9ebtzq5cmq3e6yIUeo`)
            .then(response => {
                setData(response.data)
                setCityName(response.data.results[0].address_components[0].long_name)
            })
            .catch(error => {
                console.error('Error fetching data: ', error)
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [props.lat, props.long])

    if (loading) return 'Loading...'
    if (error) return 'Error!!'
    console.log(cityName)
    console.log(data)
    return (
        <h1>
            Currently in {cityName}:
        </h1>
    )
}