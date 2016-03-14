angular.module('weuiapp', ['ngAnimate', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'home',
                templateUrl: ''
            })
            .when('/button',{
            	controller: 'button',
                templateUrl: 'button.html'
            })
            .when('/cell', {
                controller: 'cell',
                templateUrl: 'cell.html'
            })
            .when('/toast', {
                controller: 'toast',
                templateUrl: 'toast.html'
            })
            .when('/msg', {
                controller: 'msg',
                templateUrl: 'msg.html'
            })
            .when('/article', {
                controller: 'article',
                templateUrl: 'article.html'
            })
            .when('/icons', {
                controller: 'icons',
                templateUrl: 'icons.html'
            })
            .when('/panel', {
                controller: 'panel',
                templateUrl: 'panel.html'
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
    .controller('toast', ['$scope', '$interval', toast])
    .animation('.aweui-show', ['$animateCss', toastAnimate])
    .animation('.home', ['$animateCss', function($animateCss) {
        return {
            enter: function(element, doneFn) {
                return $animateCss(element, {
                    from: { left: '80%', top: 0, opacity: 0 },
                    to: { left: 0, top: 0, opacity: 1 },
                    duration: .3
                });
            },
            leave: function(element, doneFn) {
                return $animateCss(element, {
                    from: { left: 0, top: 0, opacity: 1 },
                    to: { left: '-80%', top: 0, opacity: 0 },
                    duration: .3
                });
            }
        }
    }])
    .animation('.view', ['$animateCss', function($animateCss) {
        return {
            enter: function(element, doneFn) {
                return $animateCss(element, {
                    from: { left: '80%', top: 0, opacity: 0 },
                    to: { left: 0, top: 0, opacity: 1 },
                    duration: .3
                });
            },
            leave: function(element, doneFn) {
                return $animateCss(element, {
                    from: { left: 0, top: 0, opacity: 1 },
                    to: { left: '-80%', top: 0, opacity: 0 },
                    duration: .3
                });
            }
        }
    }])
