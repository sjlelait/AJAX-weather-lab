const $weatherFor = $('#for');
const $temperature = $('#temp');
const $feelsLike = $('#feels-like');
const $weather = $('#weather');
const $input = $(`input[type="text"]`);

let weatherData, userInput

$("form").on("submit", handleGetData)
function handleGetData(event) {
  event.preventDefault()  
  userInput = $input.val()
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q="+userInput+"&units=imperial&appid=d4d03de8b8361a6f344c6260a8387c48"
  })  
  .then(
    (data) => {
      weatherData = data
      render()
    },
    (error) => {
      console.log("bad request", error)
    }
)};

function render() {
  $weatherFor.text(weatherData.name)
  $temperature.text(weatherData.main.temp)
  $feelsLike.text(weatherData.main.feels_like)
  $weather.text(weatherData.weather[0].main)
};




