$(function(){
    document.getElementById("bumton").addEventListener("click", function(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(callback);
        } else {
            document.getElementById("container").innerHTML = "Geolocation is not supported by this browser.";
            return;
        }
        
        function callback(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var baseurl = "https://api.wunderground.com/api/05a9df1aa8a9f812/conditions/forecast/alert/q/";
            var type = ".json";

            $.ajax({
                url: baseurl + latitude + "," + longitude + type,
                method: "GET",
                success: function(res) {
                    if(res.current_observation && res.forecast) 
                        displayWeather(res);
                }
            });
        }
    });

   
    
    function displayWeather(weather) {
        // get the main container from the page
        var mainContainer = document.getElementById("container");
          
        // create a div container to hold the location
        var locationContainer = document.createElement("div");
        locationContainer.innerHTML = "<h1>Location</h1>";
            var valueLocation = weather.current_observation.display_location.full;
            var locationName = document.createElement("p");
            locationName.innerHTML = `Location: ${valueLocation}`; // `` means this is a templated string. At the execution time, anything between ${...} is replaced by the variables mentioned inside ${...}
            var valueTime = weather.current_observation.local_time_rfc822;
            var locationTime = document.createElement("p");
            locationTime.innerHTML = `Time: ${valueTime}`;
        locationContainer.appendChild(locationName);
        locationContainer.appendChild(locationTime);
        
        
        // de aici
        var currentWeather = document.createElement("div");
        currentWeather.innerHTML = "<h1>Weather</h1>";
        currentWeather.setAttribute("class", "border-top");
            var valueTemperature = weather.current_observation.temp_c;
            var paragraphTemperature = document.createElement("p");
            paragraphTemperature.innerHTML = `Temperature is ${valueTemperature}° C`
            var valueRealFeel = weather.current_observation.feelslike_c;
            var paragraphRealFeel = document.createElement("p");
            paragraphRealFeel.innerHTML = `RealFeel is ${valueRealFeel}° C`
            var valueHumidity = weather.current_observation.relative_humidity;
            var paragraphHumidity = document.createElement("p");
            paragraphHumidity.innerHTML = `Humidity is ${valueHumidity}`
            var valueWeahter = weather.current_observation.weather;
            var paragraphWeather = document.createElement("p");
            paragraphWeather.innerHTML = `Weather is ${valueWeahter}`;    
            var valueWeatherImage = weather.current_observation.icon_url;
            var imageWeatherImage = document.createElement("img");
            imageWeatherImage.setAttribute("src", valueWeatherImage);
        currentWeather.appendChild(paragraphTemperature);
        currentWeather.appendChild(paragraphRealFeel);
        currentWeather.appendChild(paragraphHumidity);
        currentWeather.appendChild(paragraphWeather);
        currentWeather.appendChild(imageWeatherImage);
        // pana aici
        
        var forecast = document.createElement("table");
        forecast.innerHTML = "<h1>Forecast</h1>";
        forecast.setAttribute("class", "border-top");
            weather.forecast.txt_forecast.forecastday.forEach(function(element) {
                var tableTr = document.createElement("tr");
                    var tableTd0 = document.createElement("td");
                    tableTd0.innerHTML = `<b>${element.title}</b>`;
                    var tableTd1 = document.createElement("td");
                    tableTd1.innerHTML = element.fcttext_metric;
                    var tableTd2 = document.createElement("td");
                        var tableTd2Image = document.createElement("img");
                        tableTd2Image.setAttribute("src", element.icon_url);
                        tableTd2.appendChild(tableTd2Image);
                tableTr.appendChild(tableTd0);
                tableTr.appendChild(tableTd1);
                tableTr.appendChild(tableTd2);
                forecast.appendChild(tableTr);
            });
        
        /*$("#container").append(
            $("<div/>", {
                class: "border-top", 
            }).append(
                $("<p/>", {
                    text: `Temperature is ${weather.current_observation.temp_c}`
                })
            ).append(
                $("<p/>", {
                    text: `RealFeel is ${weather.current_observation.feelslike_c}`
                }) 
            ).append(
                $("<p/>", {
                    text: `Humidity is ${weather.current_observation.relative_humidity}`
                }) 
            ).append(
                $("<p/>", {
                    text: `Weather is ${weather.current_observation.weather}`
                }) 
            ).append(
                $("<img/>", {
                    src: weather.current_observation.icon_url
                }) 
            )
        );*/
        
        
        mainContainer.appendChild(locationContainer);
        mainContainer.appendChild(currentWeather);
        mainContainer.appendChild(forecast);
        console.log(weather); 
    }
    var hidden=1;
    $("#buton4").click(function() {
        if(hidden){
            $("#nothing").show();
            hidden = 0;
        } else {
            $("#nothing").hide();
            hidden = 1;
        }
    });    
});