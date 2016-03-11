angular.module('weuiapp', ['ngAnimate'])
    .controller('weui', ['$scope', '$interval', function($scope, $interval) {
        $scope.toastHide = 0;
        $scope.loadingToastHide = 0;

        $scope.showToast = function() {
            $scope.toastHide = 1;
        }

        $scope.showLoadingToast = function() {
            $scope.loadingToastHide = 1;
        }
    }])
    .animation('.aweui-show', ['$animateCss', function($animateCss) {
        return {
            enter: function(element, doneFn) {
                return $animateCss(element, {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                    duration: 2
                });
            }
        }
    }])
    .animation('.aweui-show', ['$animateCss', function($animateCss) {
        return {
            move: function(element, doneFn) {
                return $animateCss(element, {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                    duration: 2
                });
            }
        }
    }]);;
