"use strict";

var app = angular.module('dashboardApp', ['ngRoute', 'ngResource','chart.js', 'ngAnimate', 'isteven-omni-bar']);

app.config(function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/dashboard', {
      controller: 'DashboardController',
      templateUrl: 'views/dashboard.html'
    })
    .otherwise({
      redirectTo: '/dashboard' 
    });

    $locationProvider.html5Mode(true);

});

app.factory('DashboardData', function ($resource) {
  return $resource('/api/dashboard', null, {
    query: {
      method: 'GET',
      transformResponse: function(data) {
        return angular.fromJson(data);
      }
    }
  });
});

app.controller('DashboardController', function ($scope, DashboardData) {
  $scope.data = DashboardData.query();
});
