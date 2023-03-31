export default function LatLong () {
    navigator.geolocation.getCurrentPosition((position) => {
        return (
            <>
                {console.log(position.coords.latitude)}
                {console.log(position.coords.longitude)}
                {position.coords.latitude}
                {position.coords.longitude}
            </>
        )
    })
}