var res = fetch("https://restcountries.com/v3.1/all").then((data)=>data.json()).then((data1)=>card_build(data1))

var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className ="row"


function card_build(res1){
    for(var i =0;i<res1.length;i++){
        var weather_lat_lang = res1[i].latlng        
        var col=document.createElement("div")
        col.className = "col-md-4"
        col.innerHTML =`<div class="card" style="width: 18rem;">
        <div class ="top-div"style="text-align: center;background-color:#E5BEEC"><h6>${res1[i].name.official}</h6></div>
        <div class="image-container">
        <img src="${res1[i].flags.svg}" alt="Your Image">
        </div>
        <div class="card-body">
          <p class="card-text">Capital: ${res1[i].capital}</p>
          <p class="card-text">Region: ${res1[i].region}</p>
          <p class="card-text">Country-code: ${res1[i].cioc}</p>
          <p class="card-text">Latitude: ${res1[i].latlng[0]}</p>
          <p class="card-text">Longitude: ${res1[i].latlng[1]}</p>
          <button type="button" class="btn btn-primary" onclick="weather_data(${weather_lat_lang[0]},${weather_lat_lang[1]},'${res1[i].name.official}')">Click For weather</button>
        </div>
      </div>`
        row.append(col)
        container.append(row)
        document.body.append(container)
    }
}

function weather_data(lat,lang,countryname){
    var weather_api = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=88dc6795d57faecf80c4d1eff2db7db2`).then((data)=>data.json())
    .then((data1)=>alert(`Weather Details:\nCountryName:${countryname}\nTemperature:${data1.main.temp}\nFeelsLike:${data1.main.feels_like}\nTemperature Min:${data1.main.temp_min}\nTemperature Max:${data1.main.temp_max}\nPressure:${data1.main.pressure}\nHumidity:${data1.main.humidity}\nSeaLevel:${data1.main.sea_level}\nGroundLevel:${data1.main.grnd_level}`));   
}