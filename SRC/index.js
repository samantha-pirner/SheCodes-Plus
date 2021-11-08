//Date
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
{
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
}
let h4 = document.querySelector("h4");
h4.innerHTML = `${day} ${hours}:${minutes}`;

//Search Engine
function citySearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let locationChange = document.querySelector("#cityName");
  locationChange.innerHTML = `${cityInput.value}`;
  let apiKey = "8e2bfab4d482ab37bf6cedf3444149ff";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  locationChange.innerHTML = `${cityInput.value}`;
  axios.get(`${apiUrl}`).then(showTemperature);
}
let form = document.querySelector("#city-form");
form.addEventListener("submit", citySearch);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let showCurrentCityTemp = document.querySelector("#temp");
  let locationChange = document.querySelector("#cityName");
  let currentCity = response.data.name;
  locationChange.innerHTML = currentCity;
  showCurrentCityTemp.innerHTML = temperature;
}

function retrievePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "8e2bfab4d482ab37bf6cedf3444149ff";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}`).then(showTemperature);
}

function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let searchWeatherLocation = document.querySelector("#current-location");
searchWeatherLocation.addEventListener("click", getLocation);
