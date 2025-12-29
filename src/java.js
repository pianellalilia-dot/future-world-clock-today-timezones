function showCurrentLocation() {
  let cityDate = document.querySelector("#each-city-date");
  let currentCityDate = moment().format(`MMMM Do YYYY`);
  cityDate.innerHTML = currentCityDate;

  let cityTime = document.querySelector("#each-city-time");
  let currentCityTime = moment().format(`h:mm:ss A`);
  cityTime.innerHTML = currentCityTime;
}

function showCity(city) {
  let cityList = document.querySelector("#clock-worlds");
  let newCity = `     <div class="each-city" id="each-city">
          <div class="each-city-remove-button"><button>-</button></div>
          <div>
            <div class="each-city-name">Current city</div>
            <div class="each-city-date" id="each-city-date"></div>
          </div>
          <div class="each-city-time" id="each-city-time"></div>
        </div>`;
  cityList.innerHTML += newCity;
}

function handleCity(event) {
  showCity();
}
setInterval(showCurrentLocation, 1000);

let optionalCities = document.querySelector("#cities");
optionalCities.addEventListener("change", handleCity);
