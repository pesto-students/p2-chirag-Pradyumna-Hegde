const { default: axios } = require("axios");
const express = require("express");
const app = express();

const getCityUrl = `https://api.weatherapi.com/v1/current.json?`;
const getForecastUrl = `https://api.weatherapi.com/v1/forecast.json?`;
const key = `9aa47db5e34248eba4273329220908`;

const getCityData = async (city) => {
  const url = getCityUrl + new URLSearchParams({ key: key, q: city });
  let result = await axios.get(url);
  result = result.data;
  console.log(result);
};

const getForecastData = async (city, days) => {
  const url =
    getForecastUrl + new URLSearchParams({ key: key, q: city, days: days });
  let result = await axios.get(url);
  result = result.data;
  console.log(result);
};

app.get("/getCity", async (req, res) => {
  const result = [];
  if (!req.query.city) return [];
  const cities = req.query.city.split(",");
  for (let i = 0; i < cities.length; i++) {
    const data = await getCityData(cities[i]);
    result.push(data);
  }
  res.send(result);
});

app.get("/getWeatherForecast", async (req, res) => {
  const result = [];
  if (!req.query.city || !req.query.days) return [];
  const cities = req.query.city.split(",");
  const { days } = req.query;
  for (let i = 0; i < cities.length; i++) {
    const data = await getForecastData(cities[i], days);
    result.push(data);
  }
  res.send(result);
});

const port = process.env.PORT || 5005;
app.listen(port, () => console.log(`listening on port: ${port}`));
