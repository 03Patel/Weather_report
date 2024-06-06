const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="0140a68f9e1dc5a4ab9443a900758e7e";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weather_icon=document.querySelector(".weather-icon");
const weather=document.querySelector(".weather");
const erorr=document.querySelector(".error");
async function checkWheather(city){
    const respone= await fetch(apiUrl + `${searchBox.value}  &appid=${apiKey}`);
    if(respone.status==404){
       erorr.style.display="block";
       weather.style.display="none";
    }
    else{
        var data =await respone.json();
    

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";
    
        if(data.weather[0].main == "Clouds"){
            weather_icon.src="images/clouds.png";
        }else if( data.weather[0].main == "Clear"){
            weather_icon.src="images/clear.png";
        }else if( data.weather[0].main == "Rain"){
            weather_icon.src="images/rain.png";
        }else if( data.weather[0].main == "Drizzle"){
            weather_icon.src="images/drizzle.png";
        }else if( data.weather[0].main == "Mist"){
            weather_icon.src="images/mist.png";
        }
    }
    
    

    
    
}



searchBtn.addEventListener("click",()=>{
    checkWheather(searchBox.value);
    weather.style.display="block";

})


checkWheather();