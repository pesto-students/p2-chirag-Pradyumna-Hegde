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

  /* Adding the pagination */
  const page = !req.query.page ? 1 : parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const start_index = (page - 1) * limit;
  const end_index = page * limit;

  const result_cities = result.slice(start_index, end_index);
  res.send(result_cities);
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
  console.log(result_cities);
  res.send(result);
});

const port = process.env.PORT || 5005;
app.listen(port, () => console.log(`listening on port: ${port}`));
