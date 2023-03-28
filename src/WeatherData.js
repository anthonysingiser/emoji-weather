import axios from 'axios'
import { useState, useEffect } from 'react'
import ComfortLevel from './ComfortLevel'

export default function WeatherData() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios('https://api.open-meteo.com/v1/forecast?latitude=39.95&longitude=-75.16&hourly=temperature_2m&current_weather=true')
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
    },  [])

    if (loading) return 'Loading...'
    if (error) return 'Error!!'
    console.log(data)
    return (
        <>
            <ComfortLevel temp = {data.current_weather.temperature * 1.8 + 32}/>
        </>
    )
}