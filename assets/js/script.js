var userFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#city-name");
var cityContainerEl = document.querySelector("#city-container");
var citySearchTerm = document.querySelector("#city-search-term");
var cityName = document.querySelector("#city-name")

//     api.openweathermap.org/data/2.5/weather?q={city name}&appid={c05208e728d25d82dbd1bf19a22c8cef}


var formSubmitHandler = function (event) {
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

var getCityWeather = function (searchValue) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=c05208e728d25d82dbd1bf19a22c8cef&units=imperial"
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        });
};

// name, lastupdate, weather.icon, temperature.value, humidity.value, wind.speed, 

var displayWeather = function (searchTerm) {
    // check if api returned any repos
    if (repos.length === 0) {
        repoContainerEl.textContent = "No repositories found.";
        return;
    }

    repoSearchTerm.textContent = searchTerm;

    for (var i = 0; i < repos.length; i++) {
        // create a span element to hold city weather info 
        var titleEl = document.createElement("span");
        titleEl.textContent = cityName;

        cityEl.appendChild(titleEl);
        // create a status element
        var statusEl = document.createElement("span");
        statusEl.classList = "flex-row align-center";

        // append to container
        repoEl.appendChild(statusEl);
        repoContainerEl.appendChild(cityEl);
    }
};

// userFormEl.addEventListener("submit", formSubmitHandler);