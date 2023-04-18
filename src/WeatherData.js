import axios from 'axios'
import { useState, useEffect } from 'react'
import ComfortLevel from './ComfortLevel'

export default function WeatherData(props) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios(`https://api.open-meteo.com/v1/forecast?latitude=${props.lat}&longitude=${props.long}&hourly=temperature_2m&current_weather=true`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error('Error fetching data: ', error)
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    },  [props.lat, props.long])

    if (loading) return 'Loading...'
    if (error) return 'Error!!'
    
    return (
        <>
            <ComfortLevel temp={data.current_weather.temperature * 1.8 + 32}/>
        </>
    )
}