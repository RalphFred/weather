import { useEffect, useState } from "react"


export default function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey)
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const location =  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;


  const finder = "Ogu"
  const fetcher = `http://api.openweathermap.org/geo/1.0/direct?q=${finder}&limit=5&appid=${apiKey}`;
  console.log(fetcher);

  return(
    <div className="">
      Im
    </div>
  )
}