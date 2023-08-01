import {useState, useEffect} from 'react'
import WeatherData from './WeatherData'
import GetCity from './GetCity'

export default function LatLong () {
    const [error, setError] = useState(null)
    const [location, setLocation] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!navigator.geolocation){
            setError('Geolocation is not supported')
            return
        }
        const handleSuccess = position => {
            const {latitude, longitude} = position.coords
            setLocation({
                latitude,
                longitude
            })
            setLoading(false)
        }
        const handleError = error => {
            setError(error.message)
        }
        
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
    }, [])

    if (error) return 'Error!!'
    if (loading) return 'Loading...'

    return(
        <div style={{padding: '50px'}}>
            <GetCity lat={location.latitude} long={location.longitude}/>
            <WeatherData lat={location.latitude} long={location.longitude}/> 
        </div>
    )
}