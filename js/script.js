const $sun = $("#sun");
const $sunrise = $("#sunrise");
const $sunset = $("#sunset");
const $moon = $("#moon");
const $moonrise = $("#moonrise");
const $moonset = $("#moonset");
const $solarNoon = $("#solarNoon");
const $funFacts = $("#noon");
const $sunDistance = $("#sunDistance");
const $moonDistance = $("#moonDistance");

const APIKEY = "d58238faeb664450bbe8749fa0b4d267";

$.ajax({
  url: `https://api.ipgeolocation.io/astronomy?apiKey=${APIKEY}`,
}).then((data) => {
  console.log(data);
  // NEED TO INSERT A THING HERE THAT SAYS THE USERS LOCATION!!!!!!!!!!!!!!!!!!!!!Maybe start with IP address as the first way of retrieving the data? Get that working then try it with the other syntax
  $sunrise.text(`Sunrise: ${data.sunrise}`);
  $sunset.text(`Sunset: ${data.sunset}`);
  $moonrise.text(`Moonrise: ${data.moonrise}`);
  $moonset.text(`Moonset: ${data.moonset}`);
  $solarNoon.text(`Solar Noon: ${data.solar_noon}`);
  $sunDistance.text(`Distance from the Sun: ${data.sun_distance} km`);
  $moonDistance.text(`Distance from the Moon: ${data.moon_distance} km`)
});
