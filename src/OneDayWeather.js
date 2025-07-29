import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function OneDayWeather(props) {
   function day() {
      let date = new Date(props.data.dt * 1000);
      let day = date.getDay();

      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      return days[day];
   }

   return (
      <div className="col d-flex flex-column align-items-center">
         <h3>{day()}</h3>
         <div className="weather-icon-next">
            <WeatherIcon code={props.data.weather[0].icon} size={40} />
         </div>
         <div className="weather-next">
            <span className="degree-max mb-0">
               {Math.round(props.data.temp.max)}°
            </span>
            <span className="degree-min mb-0">
               {Math.round(props.data.temp.min)}°
            </span>
         </div>
      </div>
   );
}
