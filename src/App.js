import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./components/weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Form from "./components/form";
const apiKey = "1b2f1a3f39a1f6cc4b7f38d86c7f0107";
const url = "api.openweathermap.org/data/2.5/weather?q=London,uk";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      tmax: undefined,
      tmin: undefined,
      desc: "",
      error: false,
    };
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: "wi display-1 " + icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: "wi display-1 " + icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: "wi display-1 " + icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: "wi display-1 " + icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: "wi display-1 " + icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: "wi display-1 " + icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: "wi display-1 " + icons.Clouds });
        break;
      default:
        this.setState({ icon: "wi display-1 " + icons.Clouds });
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const c = e.target.elements.city.value;
    const con = e.target.elements.country.value;
    if (c && con) {
      const apiData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${c},${con}&appid=1b2f1a3f39a1f6cc4b7f38d86c7f0107`
      );
      const jdata = await apiData.json();
      this.setState({
        city: jdata.name,
        country: jdata.sys.country,
        celsius: (jdata.main.temp - 273.5).toFixed(2),
        tmax: (jdata.main.temp_max - 273.5).toFixed(2),
        tmin: (jdata.main.temp_min - 273.5).toFixed(2),
        desc: jdata.weather[0].description,
        error: false,
      });
      this.get_WeatherIcon(this.weatherIcon, jdata.weather[0].id);
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { city, country } = this.state;
    return (
      <div className="App">
        <Form getW={this.getWeather} error={this.state.error} />
        <Weather data={this.state} />
      </div>
    );
  }
}

export default App;
