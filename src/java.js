function showCurrentLocation() {
  let cityTimezones = document.querySelectorAll(".each-city-timezone");
  let cityDates = document.querySelectorAll(".each-city-date");
  let cityTimes = document.querySelectorAll(".each-city-time");
  let numCities = cityTimezones.length;

  for (let i = 0; i < numCities; i++) {
    if (cityTimezones[i].innerHTML === "") {
      let currentCityDate = moment().format(`MMMM Do YYYY`);
      cityDates[i].innerHTML = currentCityDate;

      let currentCityTime = moment().format(`h:mm:ss A`);
      cityTimes[i].innerHTML = currentCityTime;
    } else {
      let currentCityDate = moment()
        .tz(cityTimezones[i].innerHTML)
        .format(`MMMM Do YYYY`);
      cityDates[i].innerHTML = currentCityDate;

      let currentCityTime = moment()
        .tz(cityTimezones[i].innerHTML)
        .format(`h:mm:ss A`);
      cityTimes[i].innerHTML = currentCityTime;
    }
  }
}

// function showCorrectName() {
//   let cityNames = document.querySelectorAll(".each-city-name");
//   let numCities = cityNames.length;
//   for (let i = 0; i < numCities; i++) {
//     cityNames[i].innerHTML = cityNames[i].innerHTML.split("/")[1];
//   }
// }

//selectedCityName = selectedCityName.split("/")[1];

/*let cityDate = document.querySelector("#each-city-date");
  let currentCityDate = moment().format(`MMMM Do YYYY`);
  cityDate.innerHTML = currentCityDate;

  let cityTime = document.querySelector("#each-city-time");
  let currentCityTime = moment().format(`h:mm:ss A`);
  cityTime.innerHTML = currentCityTime;*/

function showCity(event) {
  let cityList = document.querySelector("#clock-worlds");
  let selectedCity = document.querySelector("#cities");
  let selectedCityTimezone = selectedCity.value;
  let selectedCityTime = moment().tz(selectedCityTimezone).format(`h:mm:ss A`);
  let selectedCityDate = moment()
    .tz(selectedCityTimezone)
    .format(`MMMM Do YYYY`);
  let selectedCityName = selectedCityTimezone.split("/")[1];

  cityList.innerHTML += `     <div class="each-city" id="each-city">
          <div class="each-city-remove-button"><button>-</button></div>
          <div>
            <div class="each-city-name">${selectedCityName}</div>
            <div class="each-city-timezone">${selectedCityTimezone}</div>
            <div class="each-city-date" id="each-city-date">${selectedCityDate}</div>
          </div>
          <div class="each-city-time" id="each-city-time">${selectedCityTime}</div>
        </div>`;
  //showCurrentLocation();
  //   showCorrectName();
}

showCurrentLocation();
setInterval(showCurrentLocation, 1000);

let optionalCities = document.querySelector("#cities");
optionalCities.addEventListener("change", showCity);
