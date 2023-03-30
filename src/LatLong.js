import {geolocated} from 'react-geolocated'

function LatLong () {
    return (
        this.props.isGeoLocationAvailable ? (
            this.props.isGeoLocationEnabled ? (
                this.props.Coords ? (
                    <div>
                        <>{this.props.Coords.latitude}</>
                        <>{this.props.Coords.longitude}</>
                    </div>
                ):(
                    <>Getting the location data</>
                )
            ):(
                <>Please enable location on your browser</>
            )
        ):(
            <>Please update or change your browser</>
        )
    )
}

export default geolocated()(LatLong)