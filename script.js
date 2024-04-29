const loc = document.querySelector('.loc');
const temperature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const icon1=document.querySelector('.one');
const icon2=document.querySelector('.two');
const icon3=document.querySelector('.three');

const search = document.querySelector('.searchbtn');
const searchbar = document.querySelector('.searchbar');

async function getWeather(query) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=28dba53d969039928466ff33ea4a0e0e `;
    const res=await fetch(url);
    const data= await res.json();
setweather(data)
}
function setweather(data){
    console.log(data)
    temperature.textContent = `temperature -${data.main.temp}`;
    loc.textContent = `location
    -${data.name}`;
    humidity.textContent = `humidity -${data.main.humidity}`;
  
}



search.addEventListener('click', () => {
    getWeather(searchbar.value);
});

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
});