const API_KEY = "weather api";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.textContent = data.name;
            weather.textContent = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError() {
    console.log("어디 계세요?");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
