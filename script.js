const $weatherFor = $('#for');
const $temperature = $('#temp');
const $feelsLike = $('#feels-like');
const $weather = $('#weather');
const $input = $(`input[type="text"]`);

let weatherData, userInput

$("form").on("submit", handleGetData)
// callback function for the on submit handler
function handleGetData(event) {
  event.preventDefault()
  // calling preventDefault() on a 'submit' event will prevent a page refresh
  userInput = $input.val()
  $.ajax({
    url: "http://api.openweathermap.org/geo/1.0/direct?q=Fort+Collins,CO,&appid=0ced26b56d067de66888363b2e65cb42" + userInput,
  }).then(
    (data) => {
      weatherData = data
      render()
    },
    (error) => {
      console.log("bad request", error)
    }
  )
}

function render() {
  $weatherFor.text(weatherData.weatherFor)
  $temperature.text(weatherData.temperature)
  $feelsLike.text(weatherData.feelsLike)
  $weather.text(weatherData.weather)
}




