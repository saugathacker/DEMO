import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import WeatherCard from "./WeatherCard";

const apiKey = "c1557f43cb40b87dfad42da958859f0e";

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state
  // }
  state = {
    apiURL:
      "https://api.openweathermap.org/data/2.5/weather?q=West Monroe&appid=c1557f43cb40b87dfad42da958859f0e",
    weatherInfo: null,
    currentTemp: null,
    feelsLike: null,
    humidity: null,
    cityName: "Monroe",
    weather: null,
    iconTag: null,
    tempMax: null,
    tempMin: null,
    showCelcius: true,
  };

  componentDidMount() {
    // axios
    //   // This is where the data is hosted
    //   .get(this.state.apiURL)
    //   // Once we get a response and store data, let's change the loading state
    //   .then((response) => {
    //     console.log(response.data.weather);
    //     this.setState({
    //       weatherInfo: [...response.data.weather],
    //     });
    //   });

    fetch(this.state.apiURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const temp = data;
        this.setState({
          weatherInfo: temp,
          currentTemp: (temp.main.temp - 273).toFixed(1),
          feelsLike: (temp.main.feels_like - 273).toFixed(1),
          humidity: temp.main.humidity,
          tempMax: (temp.main.temp_max - 273).toFixed(1),
          tempMin: (temp.main.temp_min - 273).toFixed(1),
          weather: temp.weather[0].main,
          iconTag:
            "http://openweathermap.org/img/wn/" +
            temp.weather[0].icon +
            "@2x.png",
        });
      });
  }

  convertTemp = () => {
    const showC = this.state.showCelcius;

    this.setState({
      showCelcius: !showC,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Weather Now</h1>
        </header>
        <WeatherCard
          temp={this.state.currentTemp}
          feels={this.state.feelsLike}
          humid={this.state.humidity}
          tempMax={this.state.tempMax}
          tempMin={this.state.tempMin}
          weather={this.state.weather}
          iconTag={this.state.iconTag}
          onClick={this.convertTemp}
          showCelcius={this.state.showCelcius}
        />
      </div>
    );
  }
}

export default App;
