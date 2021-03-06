var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=6daa4dd00dbfa6a9337194a12efea026';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location); //перекодируем пробелы итд
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; //es6 template strings

        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {

            //throw new Error(res.data.message); axios по новому обрабатывает ошибки
            throw new Error("Unable to fetch weather for that location");
        });
    }
}
