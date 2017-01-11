(function () {
  'use strict';
  angular
    .module('myModule')
    // Directive for pie charts, pass in title and data only
    .service('fightDataService', flightDataService)

  flightDataService.$inject = ['$http'];

  /**
   * recommended
   * Using function declarations
   * and accessible members up top.
   */
  function flightDataService($http) {
    var isPrimed = false;
    var primePromise;

    var service = {
      getWeatherData: getWeatherData,
      getGasConsumption: getGasConsumption,
      ready: ready
    };

    return service;

    ////////////

    function getWeatherData() {
      return $http.get('/weatherdata')
        .then(getWeatherDataComplete)
        .catch(getWeatherDataError);
      function getWeatherDataComplete(response) {
        return response;
      }

      function getWeatherDataError(response) {
        //logger.error('XHR Failed for getWeatherData.' + error.data);
      }
    }


    function getGasConsumption() {
      return $http.get('/gasconsumption')
        .then(getGasConsumptionComplete)
        .catch(getGasConsumptionError);
      function getGasConsumptionComplete(response) {
        return response;
      }

      function getGasConsumptionError(response) {
        //logger.error('XHR Failed for getGasConsumption.' + error.data);
      }
    }

    function prime() {
      // implementation details go here
    }

    function ready(nextPromises) {
      // implementation details go here
    }
  }
})();
