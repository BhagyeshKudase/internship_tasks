function getWeather() {
    let city = document.getElementById("city").value;

    let apiKey = "f1f91f3df34f78705fa7a219437c64bc";

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" 
              + city + 
              "&appid=" + apiKey + 
              "&units=metric";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let name = data.name;
        let temp = data.main.temp;
        let weather = data.weather[0].main;

        document.getElementById("result").innerText =
            name + "\nTemperature: " + temp + "°C\nWeather: " + weather;
    })
    .catch(() => {
        document.getElementById("result").innerText = "City not found";
    });
}