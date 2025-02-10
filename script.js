const input=document.querySelector("input");
const btn=document.getElementById("btn");
const icon=document.querySelector(".icon");
const weather=document.querySelector(".weather");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description");

btn.addEventListener("click",()=>{
    let city=input.value;
    getWeather(city);
})

function getWeather(city){
    console.log(city);
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'711056dc63f54e436a8eaad93d30157d'}`)
  .then(response=>response.json())
  .then(data=>{
    console.log(data);
    const iconcode=data.weather[0].icon;
    icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${iconcode}.png" alt="Weather icon"/>`
    const weathercity=data.name;
    const weathercountry=data.sys.country;
    weather.innerHTML=`${weathercity},${weathercountry}`;

    let weathertemp=data.main.temp;
weathertemp=weathertemp-273;
const temp=weathertemp.toFixed(2);
    temperature.innerHTML=`${temp} C`;
    const weatherdes=data.weather[0].description;
    description.innerHTML=`${weatherdes}`;
})
}





// added a comment




