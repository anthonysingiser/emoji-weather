import LatLong from "./LatLong";
import WeatherData from "./WeatherData";

export default function App() {
  return (
    <center>
      <h2>Currently In Philadelphia:</h2>
      <WeatherData />
      <LatLong />
    </center>
  )
}