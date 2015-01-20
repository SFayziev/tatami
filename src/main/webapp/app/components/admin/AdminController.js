AdminModule.controller('AdminController', [
    '$scope',
    '$translate',
    'AdminService',
    'adminData',
    function($scope, $translate, AdminService, adminData) {
        $scope.adminData = adminData;
        $scope.showReindexMessage = adminData.message != null;

        $scope.reindex = function() {
            if(confirm($translate.instant('tatami.admin.confirm'))) {
                AdminService.save({ options: 'reindex' });
                $scope.$state.go('admin')
                $scope.showReindexMessage = true;
            }
        }
}]);