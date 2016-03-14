angular.module('weuiapp', ['ngAnimate', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'home',
                templateUrl: ''
            })
            .when('/toast', {
                controller: 'toast',
                templateUrl: 'toast.html'
            })
            .otherwise({
                redirectTo: '/'
            })

    })
    .controller('home', function($scope) {
        $scope.homeShow = true;
        $scope.viewShow = false;

        $scope.showBlock = function() {
            $scope.homeShow = false;
            $scope.viewShow = true;
        }
    })
    .controller('toast', ['$scope', '$interval', function($scope, $interval) {
        $scope.toastHide = 0;
        $scope.loadingToastHide = 0;

        $scope.showToast = function() {
            $scope.toastHide = 1;

            $interval(function() {
                $scope.toastHide = 0;
            }, 3000, 1);
        }

        $scope.showLoadingToast = function() {
            $scope.loadingToastHide = 1;

            $interval(function() {
                $scope.loadingToastHide = 0;
            }, 3000, 1);
        }
    }])
    .animation('.aweui-show', ['$animateCss', function($animateCss) {
        return {
            enter: function(element, doneFn) {
                return $animateCss(element, {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                    duration: .3
                });
            },
            leave: function(element, doneFn) {
                return $animateCss(element, {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                    duration: .3
                });
            }
        }
    }])
    .animation('.home', ['$animateCss', function($animateCss) {
        return {
            enter: function(element, doneFn) {
                return $animateCss(element, {
                    from: { left: '30%', top: 0, opacity: 0 },
                    to: { left: 0, top: 0, opacity: 1 },
                    duration: .3
                });
            },
            leave: function(element, doneFn) {
                return $animateCss(element, {
                    from: { left: 0, top: 0, opacity: 1 },
                    to: { left: '-30%', top: 0, opacity: 0 },
                    duration: .3
                });
            }
        }
    }])
    .animation('.view', ['$animateCss', function($animateCss) {
        return {
            enter: function(element, doneFn) {
                return $animateCss(element, {
                    from: { left: '30%', top: 0, opacity: 0 },
                    to: { left: 0, top: 0, opacity: 1 },
                    duration: .3
                });
            },
            leave: function(element, doneFn) {
                return $animateCss(element, {
                    from: { left: 0, top: 0, opacity: 1 },
                    to: { left: '-30%', top: 0, opacity: 0 },
                    duration: .3
                });
            }
        }
    }])
