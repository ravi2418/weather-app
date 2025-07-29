import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
   return (
      <div className="currentWeather">
         <div className="weather-current">
            <div className="weather-icon">
               <WeatherIcon code={props.data.icon} size={54} />
            </div>
            <div className="temp-current">
               <div className="degree">
                  <h1>{Math.round(props.data.temperature)}</h1>
                  <p className="temp-unit">°C</p>
               </div>
            </div>
            <div className="vertical-line"></div>
            <div className="weather-details">
               <p>Humidity: {props.data.humidity}%</p>
               <p>Wind: {Math.round(props.data.wind)} km/h</p>
            </div>
         </div>
      </div>
   );
}
