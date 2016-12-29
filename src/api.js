var Wunderground = require('wundergroundnode');
var myKey = ''; //need to get key from https://www.wunderground.com/weather/api/d/docs?d=index
var wunderground = new Wunderground(myKey);
var handleSendWeather = require('./mailer.js');

module.exports = getApi;

function getApi () {
  wunderground.conditions().forecast().request('03844', function(err, res) {
    var curr_temp = res.current_observation['temp_f'];
    var temp = JSON.stringify(curr_temp);
    var curr_cond = res.current_observation['weather'];
    var condition = JSON.stringify(curr_cond);
    var curr_snow = res.forecast.simpleforecast['forecastday'][0]['snow_allday'].in;
    var snow = JSON.stringify(curr_snow);
    var data = "Today's temperature is "+temp+" with "+condition+" weather. Expecting "+snow+" inches of snow.";
    handleSendWeather(data);
    console.log("current temperature is "+curr_temp+" conditions are "+condition+" and expecting "+snow+" inches of snow.");
  });
}

getApi();
