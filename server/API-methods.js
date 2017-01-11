var express = require('express');
var router = express.Router();
var exports = module.exports;


// GET WEATHER DATA
exports.getWeatherData = function (req, res) {
  var data = {
    title: {
      text: 'Temperature data (Weather)'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
  };

  return res.json(data);
}

// GET GAS CONSUMPTION DATA
exports.getGasConsumptionData = function (req, res) {
  var data = [{
    name: "GE9X",
    y: 56.33
  }, {
    name: "GE90",
    y: 24.03,
    sliced: true,
    selected: true
  }, {
    name: "GEnx",
    y: 10.38
  }, {
    name: "GP7200",
    y: 4.77
  }, {
    name: "CF6",
    y: 0.91
  }, {
    name: "CFM56",
    y: 0.2
  }];

  return res.json(data);
}