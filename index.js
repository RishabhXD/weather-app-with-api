const apiKey = '001ff12acbd0ce48e7b38816cb538ed9';

const form = document.getElementById('form');
const search = document.getElementById('search');
const container = document.getElementById('container');

async function getData(location){
    const url = `https://api.openweathermap.org/data/2.5/find?q=${location}&units=metric&appid=${apiKey}`;
    const res = await fetch(url);
    const resData = await res.json();

    displayData(resData);
}

const displayData = (data) => {
    container.innerHTML = `
        <h2>${data.list[0].name}</h2>
        <img class = "icon" src = "http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png"/>
        <span class = "temperature">${data.list[0].main.temp}°C</span>
        <strong>Feels like ${data.list[0].main.feels_like} ${data.list[0].weather[0].main}</strong>
        <div class="sub">
            Humidity: ${data.list[0].main.humidity}
            Pressure: ${data.list[0].main.pressure}
        </div>
    `
}



form.addEventListener('submit',e=>{
    e.preventDefault();
    const location = search.value

    if(location){
        getData(location);
        search.value='';
    }

})