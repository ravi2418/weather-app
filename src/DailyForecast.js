import React, { useState, useEffect } from "react";
import axios from "axios";
import OneDayWeather from "./OneDayWeather";

export default function DailyForecast(props) {
   let [loaded, setLoaded] = useState(false);
   let [forecast, setForecast] = useState(null);

   useEffect(() => {
      setLoaded(false);
   }, [props.coordinates]);

   function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
   }

   if (loaded) {
      return (
         <div className="DailyForecast">
            <div className="row row-cols-3 row-cols-lg-6">
               {forecast.map(function (dailyForecast, index) { 
                  if (index < 6) {
                     return (
                        <div className="mb-4" key={index}>
                           <OneDayWeather data={dailyForecast} />
                        </div>
                     );
                  } else {
                     return null;
                  }
               })}
            </div>
         </div>
      );
   } else {
      const apiKey = "2108cc07968dd919d226aef35f7f4509";
      const latitude = props.coordinates.lat;
      const longitude = props.coordinates.lon;
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);

      return null;
   }
}
