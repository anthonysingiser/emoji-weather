import WeatherData from "./WeatherData";
import LatLong from "./LatLong";

export default function App() {
  return (
    <center>
      <h2>Currently In Philadelphia:</h2>
      <WeatherData />
      <LatLong/>
    </center>
  )
}