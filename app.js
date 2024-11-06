var searchBar = document.getElementById('input');
var city = document.getElementById("cityName");
var country = document.getElementById("country");
var temp = document.getElementById("temp")
var weather = document.getElementById("weatherName");
var img = document.getElementById('img');
var humidity = document.getElementById('humidity');
var feel = document.getElementById('feel');
var subsBody = document.getElementById("subsBody")

searchBar.addEventListener("keydown", (e) => {
    // console.log(e.code)
    if (e.keyCode === 13) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=7e5506b2114eb4740f4250b1fd0b6522`).
            then((res) => res.json()).
            then(
                (data) => {
                    searchBar.value = "";
                    subsBody.style.display = "block"
                    console.log(data)
                    city.innerHTML = data.name
                    country.innerHTML = data.sys.country
                    temp.innerHTML = Math.floor(data.main.temp - 273) + " C<sup>o</sup>";
                    weather.innerHTML = data.weather[0].main
                    var id = data.weather[0].id
                    if (id == 800) {
                        img.src = "./img/clear.svg";
                    } else if (id >= 200 && id <= 232) {
                        img.src = "./img/storm.svg";
                    } else if (id >= 600 && id <= 622) {
                        img.src = "./img/snow.svg";
                    } else if (id >= 701 && id <= 781) {
                        img.src = "./img/haze.svg";
                    } else if (id >= 801 && id <= 804) {
                        img.src = "./img/cloud.svg";
                    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
                        img.src = "./img/rain.svg";
                    }
                    humidity.innerHTML = data.main.humidity + "%";
                    feel.innerHTML = Math.floor(data.main.feels_like - 273) + " C";
                }
            ).catch((e) => console.log(e))
    }
})



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    var lat = position.coords.latitude 
    var lon = position.coords.longitude
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7e5506b2114eb4740f4250b1fd0b6522`).
        then((res) => res.json()).
        then(
            (data) => {
                searchBar.value = "";
                subsBody.style.display = "block"
                console.log(data)
                city.innerHTML = data.name
                country.innerHTML = data.sys.country
                temp.innerHTML = Math.floor(data.main.temp - 273) + " C<sup>o</sup>";
                weather.innerHTML = data.weather[0].main
                var id = data.weather[0].id
                if (id == 800) {
                    img.src = "./img/clear.svg";
                } else if (id >= 200 && id <= 232) {
                    img.src = "./img/storm.svg";
                } else if (id >= 600 && id <= 622) {
                    img.src = "./img/snow.svg";
                } else if (id >= 701 && id <= 781) {
                    img.src = "./img/haze.svg";
                } else if (id >= 801 && id <= 804) {
                    img.src = "./img/cloud.svg";
                } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
                    img.src = "./img/rain.svg";
                }
                humidity.innerHTML = data.main.humidity + "%";
                feel.innerHTML = Math.floor(data.main.feels_like - 273) + " C";
            }
        ).catch((e) => console.log(e))

}
