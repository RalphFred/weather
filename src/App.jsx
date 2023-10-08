// import { useEffect, useState } from "react"
import DesktopSidebar from "./components/DesktopSidebar"
import Main from "./components/Main"

export default function App() {
  // const apiKey = import.meta.env.VITE_API_KEY;
  // console.log(apiKey)
  // const [lat, setLat] = useState("");
  // const [lon, setLon] = useState("");

  // const location =  navigator.geolocation.getCurrentPosition((position) => {
  //   setLat(position.coords.latitude);
  //   setLon(position.coords.longitude);
  // });


  // Fethching the data using user's location
  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     console.  log(lat, lon)
  //   })
  // }, [])



  // const finder = "Ogauga"
  // const fetcher = `http://api.openweathermap.org/geo/1.0/direct?q=${finder}&limit=5&appid=${apiKey}`;
  // console.log(fetcher);

  return(
    <div className="flex lg:p-10 lg:h-screen bg-light-gray">
      <DesktopSidebar />
      <Main />
    </div>
  )
}