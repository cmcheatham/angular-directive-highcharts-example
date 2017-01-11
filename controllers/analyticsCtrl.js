(function () {
  'use strict';
  angular
    .module('myModule')
    // Controller
    .controller('analyticsController', analyticsController);


  analyticsController.$inject = ['$scope','$http', 'fightDataService'];

  function analyticsController($scope, $http, fightDataService) {

    var vm = this;
    vm.chartOptions = null;
    vm.pieData = null;


    activateGasConsumptionDataChart();
    activateWeatherDataChart();


    //Using flightDataService to fetch weather data
    function activateWeatherDataChart() {
      return getWeatherData().then(function() {
        //logger.info('Weather Data Chart');
      });
    }

    function getWeatherData() {
      return fightDataService.getWeatherData()
        .then(function(response) {
          vm.chartOptions = response.data;
          return vm.avengers;
        });
    }

    //Using flightDataService to fetch gas consumption data
    function activateGasConsumptionDataChart() {
      return GasConsumptionData().then(function() {
        //logger.info('Weather Data Chart');
      });
    }

    function GasConsumptionData() {
      return fightDataService.getGasConsumption()
        .then(function(response) {
          vm.pieData = response.data;
          return vm.avengers;
        });
    }

  }
})();
