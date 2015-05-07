// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('app', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/home.html",
            controller: 'AppCtrl'
        })

        .state('app.home', {
            url: "/home",
            views: {
                'survey-tab': {
                    templateUrl: "templates/home.html"
                }
            }
        })

        .state('app.facts', {
            url: "/facts",
            views: {
                'survey-tab': {
                    templateUrl: "templates/facts.html"
                }
            }
        })

        .state('app.facts2', {
            url: "/facts2",
            views: {
                'survey-tab': {
                    templateUrl: "templates/facts2.html"
                }
            }
        })

        /*
        .state('app.survey', {
            url: "/survey/:surveySlug",
            views: {
                'content' :{
                    templateUrl: function(stateParams) {
                        console.log('Template content');
                        return "templates/survey/" + stateParams.surveySlug + ".html";
                    }
                }
            }
        })*/;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});

var globals = {};
globals.checkedServer = false;
globals.assetServer = "http://backend-ifeed.rhcloud.com/api/locations/active"; //http://backend-ifeed.rhcloud.com/api/locations/accountId/active
globals.assetSubDir = "assets";
globals.surveyUri = "http://backend-ifeed.rhcloud.com/api/surveys/5540b163d80bd368de2f4bd5";

app.controller("AppCtrl", function($scope, $cordovaBarcodeScanner, $http) {
console.log("Working");

/*
    // Simple GET request example :
    $http.get(globals.surveyUri).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.survey = data;
            console.log($scope.survey);

        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log("something went wrong while trying getting survey");
        });

    // Simple GET request example :
    $http.get(globals.assetServer).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.location = data;
            console.log($scope.location);

        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log("something went wrong while trying getting location");
        });

  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      alert(imageData.text);
      console.log("Barcode Format -> " + imageData.format);
      console.log("Cancelled -> " + imageData.cancelled);
    }, function(error) {
      console.log("An error happened -> " + error);
    });
  };
*/
});
