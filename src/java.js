function showCurrentLocation() {
  let cityDate = document.querySelector("#each-city-date");
  let currentCityDate = moment().format(`MMMM Do YYYY`);
  cityDate.innerHTML = currentCityDate;

  let cityTime = document.querySelector("#each-city-time");
  let currentCityTime = moment().format(`h:mm:ss A`);
  cityTime.innerHTML = currentCityTime;
}

function showCity(event) {
  let cityList = document.querySelector("#clock-worlds");
  let selectedCity = document.querySelector("#cities");
  let selectedCityName = selectedCity.value;
  let selectedCityTime = moment().tz(selectedCityName).format(`h:mm:ss A`);
  let selectedCityDate = moment().tz(selectedCityName).format(`MMMM Do YYYY`);
  selectedCityName = selectedCityName.split("/")[1];

  cityList.innerHTML += `     <div class="each-city" id="each-city">
          <div class="each-city-remove-button"><button>-</button></div>
          <div>
            <div class="each-city-name">
  ${selectedCityName}</div>
            <div class="each-city-date" id="each-city-date"> ${selectedCityDate}</div>
          </div>
          <div class="each-city-time" id="each-city-time">  ${selectedCityTime} </div>
        </div>`;
}

setInterval(showCurrentLocation, 1000);

let optionalCities = document.querySelector("#cities");
optionalCities.addEventListener("change", showCity);
