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
const $city = $("#city");
const $country = $("#country");
const $state = $("#state");
const $input = $("#userLocationInput");
const $button = $("#locationBtn");

const APIKEY = "66fb01154202440a94a4c5b614978d0c";

$.ajax({
  url: `https://api.ipgeolocation.io/astronomy?apiKey=${APIKEY}`,
}).then((data) => {
  console.log(data);
  $sunrise.text(`Sunrise: ${data.sunrise}`);
  $sunset.text(`Sunset: ${data.sunset}`);
  $moonrise.text(`Moonrise: ${data.moonrise}`);
  $moonset.text(`Moonset: ${data.moonset}`);
  $solarNoon.text(`Solar Noon: ${data.solar_noon}`);
  $sunDistance.text(`Distance from the Sun: ${data.sun_distance} km`);
  $moonDistance.text(`Distance from the Moon: ${data.moon_distance} km`);
});

function getSpaceData() {
  const userInput = $input.val();
  $.ajax(
    `https://api.ipgeolocation.io/astronomy?apiKey=${APIKEY}&location=${userInput},%20US`
  ).then((data) => {
    console.log(data);
    console.log(userInput);
    //$city.text(`City: ${data.location};
    $state.text(`State: ${data.location.state}`);
    $country.text(`Country: ${data.location.country}`);
    $sunrise.text(`Sunrise: ${data.sunrise}`);
    $sunset.text(`Sunset: ${data.sunset}`);
    $moonrise.text(`Moonrise: ${data.moonrise}`);
    $moonset.text(`Moonset: ${data.moonset}`);
    $solarNoon.text(`Solar Noon: ${data.solar_noon}`);
    $sunDistance.text(`Distance from the Sun: ${data.sun_distance} km`);
    $moonDistance.text(`Distance from the Moon: ${data.moon_distance} km`);
  });
}
$button.on("click", getSpaceData);

//https://api.ipgeolocation.io/astronomy?apiKey=API_KEY&location=New%20York,%20US'
