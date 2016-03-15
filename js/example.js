angular.module('weuiapp', ['ngAnimate', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'homeCtrl',
                templateUrl: ''
            })
            .when('/button',{
            	controller: 'buttonCtrl',
                templateUrl: 'button.html'
            })
            .when('/cell', {
                controller: 'cellCtrl',
                templateUrl: 'cell.html'
            })
            .when('/toast', {
                controller: 'toastCtrl',
                templateUrl: 'toast.html'
            })
            .when('/dialog', {
                controller: 'dialogCtrl',
                templateUrl: 'dialog.html'
            })
            .when('/progress', {
                controller: 'progressCtrl',
                templateUrl: 'progress.html'
            })
            .when('/msg', {
                controller: 'msgCtrl',
                templateUrl: 'msg.html'
            })
            .when('/article', {
                controller: 'articleCtrl',
                templateUrl: 'article.html'
            })
            .when('/actionsheet', {
                controller: 'actionsheetCtrl',
                templateUrl: 'actionsheet.html'
            })
            .when('/icons', {
                controller: 'iconsCtrl',
                templateUrl: 'icons.html'
            })
            .when('/panel', {
                controller: 'panelCtrl',
                templateUrl: 'panel.html'
            })
            .otherwise({
                redirectTo: '/'
            })

    })
    .controller('homeCtrl', function($scope) {
        $scope.homeShow = true;
        $scope.viewShow = false;

        $scope.showBlock = function() {
            $scope.homeShow = false;
            $scope.viewShow = true;
        }
    })
    .controller('toastCtrl', ['$scope', '$interval', toastCtrl])
    .controller('dialogCtrl', ['$scope', dialogCtrl])
    .controller('progressCtrl', ['$scope', progressCtrl])
    .controller('actionsheetCtrl', ['$scope', actionsheetCtrl])
    .animation('.aweui-show', ['$animateCss', toastAnimate])
    .animation('.home', ['$animateCss', function($animateCss) {
        return {
            enter: function(element, doneFn) {
                return $animateCss(element, {
                    from: { left: '100%', top: 0, opacity: 0 },
                    to: { left: 0, top: 0, opacity: 1 },
                    duration: .3
                });
            },
            leave: function(element, doneFn) {
                return $animateCss(element, {
                    from: { left: 0, top: 0, opacity: 1 },
                    to: { left: '-100%', top: 0, opacity: 0 },
                    duration: .3
                });
            }
        }
    }])
    .animation('.view', ['$animateCss', function($animateCss) {
        return {
            enter: function(element, doneFn) {
                return $animateCss(element, {
                    from: { left: '100%', top: 0, opacity: 0 },
                    to: { left: 0, top: 0, opacity: 1 },
                    duration: .3
                });
            },
            leave: function(element, doneFn) {
                return $animateCss(element, {
                    from: { left: 0, top: 0, opacity: 1 },
                    to: { left: '-100%', top: 0, opacity: 0 },
                    duration: .3
                });
            }
        }
    }])
