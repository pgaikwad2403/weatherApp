// SERVICES
weatherApp.service('cityService', function() {
    this.city = "New York, US";
});

weatherApp.service('weatherService', ['$resource',function($resource) {
    this.getWeather = function(city,days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?APPID=d0f1f0b4725dde9c3264daa82f244f1b", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    return weatherAPI.get({ q:city, cnt:days });  
    };
}]);