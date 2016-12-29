var api = require('./api.js');
var cron = require('node-cron');
var Forecast = require('forecast');


cron.schedule('0 9 * * Sunday-Saturday', api); //set to send email daily, can change based on needs
