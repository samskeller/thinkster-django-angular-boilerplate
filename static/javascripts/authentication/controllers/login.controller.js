/**
 * LoginController
 * @namespace thinkster.authentication.controllers
 */
(function() {
    'use strict';

    angular
      .module('thinkster.authentication.controllers')
      .controller('LoginController', LoginController);
    
    LoginController.$inject = ['$location', '$scope', 'Authentication'];

    /**
     * @namespsace LoginController
     */
    function LoginController($location, $scope, Authentication) {
        var vm = this;

        vm.login = login;

        activate();

        /**
         * @name activate
         * @desc Actions to be performed when this controller is instantiated
         * @memberOf thinkster.authentication.controllers.LoginController
         */
        function activate() {
            if (Authentication.isAuthenticated()) {
                $location.url('/');
            }
        }

        /**
         * @name login
         * @desc Log the user in
         * @memberOf thinkster.authentication.controllers.LoginController
         */
        function login() {
            Authentication.login(vm.email, vm.password);
        }
    }
})();

