import { useEffect, useState } from "react"


export default function App() {
  const APIKey = "b61dd83a4d0c4dcf83595081a8510a81";
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const location =  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  });

  console.log(lon)
  console.log(lat)

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`

console.log(url)

  return(
    <div className="">
      Im
    </div>
  )
}