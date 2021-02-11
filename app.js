
  
   
 document.querySelector(".searchButton").addEventListener("click",weatherInfo);
 document.addEventListener("keypress",function(event){
   if(event.keyCode === 13 || event.which === 13){
    
     weatherInfo();
   } 
 });
 
 let mainContainer = document.querySelector(".all");
 
function weatherInfo(){

  var city=document.querySelector('.searchInput').value; 

  $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=b7cc5077d2f29668e2d6976ed0b44f8f",function(data){
        console.log(data);	
        let nameOfCity = data.name;
        let currentTemp = Math.round(data.main.temp)+"&#8451;";
        let currentTempMax = "&nbsp; &nbsp;"+Math.round(data.main.temp_max)+"&#8451;";
        let currentTempMin = "&nbsp; &nbsp;"+Math.round(data.main.temp_min)+"&#8451;";
        let currentDescription = data.weather[0].description;
        let iconCode = data.weather[0].icon;
        let currentIcon = "http://openweathermap.org/img/w/"+iconCode+".png";
        function addZero(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
          }
        let sunrise = data.sys.sunrise;
        let dateSunrise = new Date(sunrise*1000);
        let sunRiseHour = addZero(dateSunrise.getHours());
        let sunRiseMin = addZero(dateSunrise.getMinutes());
        let sunRiseTime = sunRiseHour+":"+sunRiseMin;

        let sunset = data.sys.sunset;
        let dateSunset = new Date(sunset*1000);
        let sunSetHour = addZero(dateSunset.getHours());
        let sunSetMin = addZero(dateSunrise.getMinutes());
        let sunSetTime = sunSetHour+":"+sunSetMin;
        let cloud = data.clouds.all+"%"; 
        let humidity = data.main.humidity+"%";
        let wind = data.wind.speed+" km/h";
        let pressure = data.main.pressure+" hPa";
      
     
        $.getJSON("api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b7cc5077d2f29668e2d6976ed0b44f8f",function(data){
          console.log(data);
       });
      //  $.getJSON("api.openweathermap.org/data/2.5/find?lat="+data.coord.lat+"&lon="+data.coord.lon+"&cnt=3&appid=b7cc5077d2f29668e2d6976ed0b44f8f",function(data){
      //   console.log(cnt);
      //   })
      $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat="+data.coord.lat+"&lon="+data.coord.lon+"&exclude=daily&units=metric&appid=b7cc5077d2f29668e2d6976ed0b44f8f",function(data){
       let hour1 = Math.round(data.hourly[10].temp);
       let hour2 = Math.round(data.hourly[20].temp);
       let hour3 = Math.round(data.hourly[47].temp);
       let early1 = data.hourly[4].dt;

      console.log(data);
      console.log(data.current.temp);
      early = new Date(early1*1000);
      console.log(early.getHours());
      console.log(hour1);
      console.log(hour2);
      console.log(hour3);

      let allHours = data.hourly;
      let sixHours =allHours.slice(0,6);
     
       sixHours.forEach(element => {
        let allHoursDt = new Date(element.dt * 1000);
        let divv = document.createElement("div");
        let forecastIcon = element.weather[0].icon;
        let iconURL = "http://openweathermap.org/img/w/"+forecastIcon+".png"
       divv.innerHTML= new Date(element.dt * 1000).getHours()+":00&nbsp; &nbsp;"+ Math.round(element.temp)+"&#8451;"+" <img src=' " + iconURL+" '>";
                                                                                                       
      console.log(mainContainer.appendChild(divv));
        mainContainer.appendChild(divv);
        console.log(allHoursDt.getHours());
        });
      });


     
       console.log(dateSunrise.getDate()+"/"+dateSunrise.getMonth()+"/"+dateSunrise.getFullYear());
       let today = dateSunrise.getDate()+"/"+dateSunrise.getMonth()+"/"+dateSunrise.getFullYear();
     
       document.querySelector(".today").innerHTML=today;
     
       console.log(sunset);
       console.log();
       
      
        document.querySelector(".nameOfCity").innerHTML=nameOfCity;
        document.querySelector(".dayTemp").innerHTML=currentTemp;
        document.querySelector(".dailyDown").innerHTML="<i class='fas fa-angle-up'> </i>"+currentTempMax;
        document.querySelector(".dailyUp").innerHTML="<i class='fas fa-angle-down'> </i>"+currentTempMin;	
        document.querySelector(".dayDescription").innerHTML=currentDescription;
        document.querySelector(".dayTempIcon").innerHTML="<img src=' " + currentIcon+" '>";
        document.querySelector(".sunrise").innerHTML=sunRiseTime;
        document.querySelector(".sunset").innerHTML=sunSetTime;
        document.querySelector(".cloudy").innerHTML=cloud;
        document.querySelector(".humidity").innerHTML=humidity;
        document.querySelector(".wind").innerHTML=wind;
        document.querySelector(".pressure").innerHTML=pressure;

    
    
    });
   init();
  
  
   }

   function init(){
     document.querySelector(".searchInput").value="";
   }
   function emptyForecast(){
     document.querySelector(".searchInput").onclick =()=>{
      let allForecast = document.querySelector(".all");
      console.log(allForecast);
      if(allForecast){
        allForecast.innerHTML="";
        
      }
     };
    }
    emptyForecast();

    function defaultLondon(){
      var city = "London";
     // var city=document.querySelector('.searchInput').value; 

      $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=b7cc5077d2f29668e2d6976ed0b44f8f",function(data){
            console.log(data);	
            let nameOfCity = data.name;
            let currentTemp = Math.round(data.main.temp)+"&#8451;";
            let currentTempMax = "&nbsp; &nbsp;"+Math.round(data.main.temp_max)+"&#8451;";
            let currentTempMin = "&nbsp; &nbsp;"+Math.round(data.main.temp_min)+"&#8451;";
            let currentDescription = data.weather[0].description;
            let iconCode = data.weather[0].icon;
            let currentIcon = "http://openweathermap.org/img/w/"+iconCode+".png";
            function addZero(i) {
                if (i < 10) {
                  i = "0" + i;
                }
                return i;
              }
            let sunrise = data.sys.sunrise;
            let dateSunrise = new Date(sunrise*1000);
            let sunRiseHour = addZero(dateSunrise.getHours());
            let sunRiseMin = addZero(dateSunrise.getMinutes());
            let sunRiseTime = sunRiseHour+":"+sunRiseMin;
    
            let sunset = data.sys.sunset;
            let dateSunset = new Date(sunset*1000);
            let sunSetHour = addZero(dateSunset.getHours());
            let sunSetMin = addZero(dateSunrise.getMinutes());
            let sunSetTime = sunSetHour+":"+sunSetMin;
            let cloud = data.clouds.all+"%"; 
            let humidity = data.main.humidity+"%";
            let wind = data.wind.speed+" km/h";
            let pressure = data.main.pressure+" hPa";
          
         
            $.getJSON("api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b7cc5077d2f29668e2d6976ed0b44f8f",function(data){
              console.log(data);
           });
          //  $.getJSON("api.openweathermap.org/data/2.5/find?lat="+data.coord.lat+"&lon="+data.coord.lon+"&cnt=3&appid=b7cc5077d2f29668e2d6976ed0b44f8f",function(data){
          //   console.log(cnt);
          //   })
          $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat="+data.coord.lat+"&lon="+data.coord.lon+"&exclude=daily&units=metric&appid=b7cc5077d2f29668e2d6976ed0b44f8f",function(data){
           let hour1 = Math.round(data.hourly[10].temp);
           let hour2 = Math.round(data.hourly[20].temp);
           let hour3 = Math.round(data.hourly[47].temp);
           let early1 = data.hourly[4].dt;
    
          console.log(data);
          console.log(data.current.temp);
          early = new Date(early1*1000);
          console.log(early.getHours());
          console.log(hour1);
          console.log(hour2);
          console.log(hour3);
    
          let allHours = data.hourly;
          let sixHours =allHours.slice(0,6);
         
           sixHours.forEach(element => {
            let allHoursDt = new Date(element.dt * 1000);
            let divv = document.createElement("div");
            let forecastIcon = element.weather[0].icon;
            let iconURL = "http://openweathermap.org/img/w/"+forecastIcon+".png"
           divv.innerHTML= new Date(element.dt * 1000).getHours()+":00&nbsp; &nbsp;"+ Math.round(element.temp)+"&#8451;"+" <img src=' " + iconURL+" '>";
                                                                                                           
          console.log(mainContainer.appendChild(divv));
            mainContainer.appendChild(divv);
            console.log(allHoursDt.getHours());
            });
          });
    
    
         
           console.log(dateSunrise.getDate()+"/"+dateSunrise.getMonth()+"/"+dateSunrise.getFullYear());
           let today = dateSunrise.getDate()+"/"+dateSunrise.getMonth()+"/"+dateSunrise.getFullYear();
         
           document.querySelector(".today").innerHTML=today;
         
           console.log(sunset);
           console.log();
           
          
            document.querySelector(".nameOfCity").innerHTML=nameOfCity;
            document.querySelector(".dayTemp").innerHTML=currentTemp;
            document.querySelector(".dailyDown").innerHTML="<i class='fas fa-angle-up'> </i>"+currentTempMax;
            document.querySelector(".dailyUp").innerHTML="<i class='fas fa-angle-down'> </i>"+currentTempMin;	
            document.querySelector(".dayDescription").innerHTML=currentDescription;
            document.querySelector(".dayTempIcon").innerHTML="<img src=' " + currentIcon+" '>";
            document.querySelector(".sunrise").innerHTML=sunRiseTime;
            document.querySelector(".sunset").innerHTML=sunSetTime;
            document.querySelector(".cloudy").innerHTML=cloud;
            document.querySelector(".humidity").innerHTML=humidity;
            document.querySelector(".wind").innerHTML=wind;
            document.querySelector(".pressure").innerHTML=pressure;
    
        
        
        });
    
    }
    
    
  

