

const api='e1b9bc80f230345f61696839c1e997c1';


const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');

window.addEventListener('load',()=>{
    let long ;
    let lat;
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((value)=>
        {
        long =value.coords.longitude;
        lat=value.coords.latitude;
        console.log(value);
        const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}`;
fetch(base).then((response)=>{
    return response.json();

}).then((data)=>{
const {temp}=data.main;
const place=data.name;
const {description, icon }=data.weather[0];
const { sunrise, sunset } = data.sys;
const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
const fahrenheit = (temp * 9) / 5 + 32;
const sunriseGMT= new Date(sunrise*1000);
const sunsetGMT=new Date(sunset*1000);



iconImg.src = iconUrl;
loc.textContent = `${place}`;
desc.textContent = `${description}`;
tempC.textContent = `${temp.toFixed(2)} °C`;
tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;

})


        }

        )
    }
});

// promiseExample = new Promise((resolve, reject) => {
//     setTimeout(function() {
//     resolve({
//       message: "I have fulfilled the Promise",
//       code: "Wohoo"
//     });
//   }, 1 * 1000);
// });
// console.log(promiseExample);