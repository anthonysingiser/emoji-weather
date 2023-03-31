export default function LatLong () {
    navigator.geolocation.getCurrentPosition((position) => {
        return (
            <>
                {position.coords.latitude}
                {position.coords.longitude}
            </>
        )
    }
    )
}