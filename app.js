(function () {
  // Carga de Módulos
  var mainApp = angular.module('peopleManager', ['ui.router',
                                                 'ui.gravatar',
                                                 'ui.bootstrap',
                                                 'ngStorage',
                                                 'toaster',
                                                 'peopleManager.login'
                                                 ]);

 // Ruta por default
 mainApp.run(['$state', function ($state) {
    $state.transitionTo('login');
 }]);
 // Configuración de routing interno
 // UI-Route
mainApp.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: './components/login/views/loginView.html',
            controller: 'loginController'
        })
        $urlRouterProvider.otherwise('login');
    }]);
})();
