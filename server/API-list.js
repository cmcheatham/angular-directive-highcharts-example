var express = require('express');
var router = express.Router();
var app = express();

//Authentication
var analyticsData = require('./API-methods.js');
//Get Weather Data
router.get('/weatherdata', analyticsData.getWeatherData);
router.get('/gasconsumption', analyticsData.getGasConsumptionData);

module.exports = router;


