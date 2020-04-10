import React from "react";
import "./App.css";

const WeatherCard = (props) => {
  return (
    <div id="weatherCard">
      {/* <button onClick={props.onClick}>Toogle Unit</button> */}
      <p id="temp">{props.temp}˚</p>
      <p>
        <img src={props.iconTag} id="icon" />
      </p>
      <p>{props.weather}</p>
      <p>Feels like: {props.feels}</p>
      <p> MAX!: {props.tempMax}</p>
      <p> MIN!: {props.tempMin}</p>
    </div>
  );
};

export default WeatherCard;
