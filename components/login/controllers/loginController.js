(function () {
  var myModule = angular.module('peopleManager.login');
  myModule.controller('loginController', ['$scope',
                                          '$state',
                                          '$stateParams',
                                          'userFactory',
                                          'toaster',
                                          '$sessionStorage',
                                          '$localStorage',
            							  function ($scope, $state, $stateParams, userFactory, toaster, $sessionStorage, $localStorage){
}]);
$scope.user{}

$scope.login=function(){
  $scope.isEnrolled=false
  if ($scope.user && $scope.user.email && $scope.user.password)
}
})();
