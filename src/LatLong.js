import {useState, useEffect} from 'react'

export default function LatLong () {
    const [error, setError] = useState()
    const [location, setLocation] = useState({})

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
        }
        const handleError = error => {
            setError(error.message)
        }
        
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
    }, [])
    return {location}
}