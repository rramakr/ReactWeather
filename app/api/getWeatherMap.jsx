var axios = require('axios');
const APIKEY = '8f21d04f5d32b6a6892d31399d271f12';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid='+APIKEY;

module.exports = {
  getTemp: function(location) {
    var encodedLoc = encodeURIComponent(location);
    var url = `${OPEN_WEATHER_MAP_URL}&q=${encodedLoc}`;
    return axios(url).then(function (res) {
      if (res.data.cod && res.data.message) {
          throw new Error(res.message);
      } else {
        return res.data.main.temp;

      }
    }, function (res) {
      console.log(res.message);
      throw new Error(res.message);
    });
  }
}
