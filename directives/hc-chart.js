(function () {
  'use strict';
  angular
    .module('myModule', [])
    // Directive for generic chart, pass in chart options
    .directive('hcChart', hcChart)

  function hcChart() {
    return {
      restrict: 'E',
      template: '<div></div>',
      scope: {
        options: '='
      },
      link: function (scope, element) {
        Highcharts.chart(element[0], scope.options);
      }
    };
  }
})();
