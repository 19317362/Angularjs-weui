function actionsheetCtrl($scope) {
    $scope.isShowActionsheet = false;
    $scope.actionsheetToggle='';

    $scope.showActionSheet = function() {
        $scope.isShowActionsheet = true;
        $scope.actionsheetToggle='weui_actionsheet_toggle';
    }

    $scope.actionsheetCancel = function() {
        $scope.isShowActionsheet = false;
        $scope.actionsheetToggle='';
    }
}
