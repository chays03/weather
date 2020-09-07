var userFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#city-name");
var cityContainerEl = document.querySelector("#city-container");
var citySearchTerm = document.querySelector("#city-search-term");
var cityName = document.querySelector("#city-name")

function renderedCities() {

    // Empties out the html
    $('#renderedCities').empty();

    // Iterates over the 'list'
    for (var i = 0; i < citiesResearched.length; i++) {
        
      var toDoItem = $(`<button class =  "${citiesResearched[i]} btn btn-light"  >`);
      toDoItem.text(citiesResearched[i]);
      // Adds 'button' to the renderedCities div
      $('#renderedCities').append(toDoItem);
      toDoItem.click(function(){
          var textContent = this.textContent;
          getCurrentWeather(textContent);
          getForecast(textContent);
      })
    }
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    var cityName = nameInputEl.value.trim();

    if (cityName) {
        getCityNames(username);
        cityContainerEl.textContent = "";
        nameInputEl.value = "";
    } else {
        alert("Please enter a real city name.");
    }
};



function getCityWeather ( searchValue ) {
    var key = 'c05208e728d25d82dbd1bf19a22c8cef';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + searchValue + '&appid=' + key)  
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        // console.log("Forecast API:", response)

        for (let i = 0; i < response.list.length; i += 8) {

            var temperatureForecast = response.list[i].main.temp
            var dateYYYYMMDDHHMMSS = response.list[i].dt_txt
            var dayOfTheWeek = moment(dateYYYYMMDDHHMMSS).format('dddd')
            var calendarDay = moment(dateYYYYMMDDHHMMSS).format('LL')
            var humidity = response.list[i].main.humidity
            var emoji
            var weatherDescription = response.list[i].weather[0].description
            var weatherEmoji = response.list[i].weather[0].main


            if (weatherEmoji == "Clouds"){
                weatherEmoji = "☁️"
            } else if (weatherEmoji == "Thunderstorm") {
                weatherEmoji = "⛈"
            } else if (weatherEmoji == "Drizzle") {
                weatherEmoji = "🌧"
            } else if (weatherEmoji == "Rain") {
                weatherEmoji = "🌧"
            } else if (weatherEmoji == "Snow") {
                weatherEmoji = "❄️"
            } else if (weatherEmoji == "Clear") {
                weatherEmoji = "☀️"
            } 

            // create anchor to append for every day of the week
            var forecastDivEl = document.createElement("div");

            // add id and class
            forecastDivEl.setAttribute("id", "hour" + [i]);
            forecastDivEl.setAttribute("class", "col forecastDivs");

            // append the humidity, dayTempEl, emojiEl into the forecastDivEl - and add an if/else statememt


            //add the  information inside the anchor
            forecastDivEl.innerHTML = dayOfTheWeek + "<br>" + calendarDay + "<br>" + "Temp: " + Math.floor(temperatureForecast) + "&#176" + "<br>" + weatherDescription + "<br>" + weatherEmoji + "<br>"
                + "Humidity: " + humidity + "%"
                + "<br>"

            

            //append child to parent
            divForecastContainerEl.appendChild(forecastDivEl);

        }


        var latitude = response.city.coord.lat;
        var longitude = response.city.coord.lon;;
        getUV(latitude, longitude)

    });


  }
//



  // 
  

  function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
}







var getCityWeather = function(searchValue) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=c05208e728d25d82dbd1bf19a22c8cef"
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        });
};

// name, lastupdate, weather.icon, temperature.value, humidity.value, wind.speed, 

// var displayWeather = function(searchValue) {
    // check if api returned any repos
//    for ()
// };

// userFormEl.addEventListener("submit", formSubmitHandler);