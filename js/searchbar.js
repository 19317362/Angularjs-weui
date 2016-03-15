function searchbarCtrl($scope) {
    $scope.focusing = '';
    $scope.isSearchShow = false;
    $scope.searchInput = '';
    $scope.searchText = true;

    $scope.searchClickEvent = function() {
        $scope.searchText = false;
        document.getElementById('searchInput').focus();
    }

    $scope.searchFocusEvent = function() {
        $scope.focusing = 'weui_search_focusing';
    }

    $scope.searchBlurEvent = function() {
    	$scope.searchText = true;
    	$scope.isSearchShow = false;
        $scope.focusing = '';
        $scope.searchInput = '';
    }

    $scope.searchKeyupEvent = function() {
        if($scope.searchInput){
        	$scope.isSearchShow = true;
        }else{
        	$scope.isSearchShow = false;
        }
    }
}
