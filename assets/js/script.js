var userFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#city-name");
var cityContainerEl = document.querySelector("#city-container");
var citySearchTerm = document.querySelector("#city-search-term");
var cityName = document.querySelector("#city-name")

//     api.openweathermap.org/data/2.5/weather?q={city name}&appid={c05208e728d25d82dbd1bf19a22c8cef}

var getCityWeather = function(searchValue) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=c05208e728d25d82dbd1bf19a22c8cef&units=imperial"
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        });
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

var displayWeather = function(searchTerm) {

}

// userFormEl.addEventListener("submit", formSubmitHandler);