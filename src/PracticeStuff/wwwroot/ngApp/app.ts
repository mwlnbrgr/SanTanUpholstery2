namespace PracticeStuff {

    angular.module('PracticeStuff', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: PracticeStuff.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('secret', {
                url: '/secret',
                templateUrl: '/ngApp/views/secret.html',
                controller: PracticeStuff.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: PracticeStuff.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: PracticeStuff.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .state('externalRegister', {
                url: '/externalRegister',
                templateUrl: '/ngApp/views/externalRegister.html',
                controller: PracticeStuff.Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: PracticeStuff.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('gallery', {
                url: '/gallery',
                templateUrl: '/ngApp/views/gallery.html',
                controller: PracticeStuff.Controllers.ImageController,
                controllerAs: 'controller'
            })
            .state('addImage', {
                url: '/addImage',
                templateUrl: '/ngApp/views/addImage.html',
                controller: PracticeStuff.Controllers.ImageController,
                controllerAs: 'controller'
            })
            .state('removeImage', {
                url: '/removerImage',
                templateUrl: '/ngApp/views/deleteImage.html',
                controller: PracticeStuff.Controllers.ImageController,
                controllerAs: 'controller'
            })
            .state('productList', {
                url: '/productList',
                templateUrl: '/ngApp/views/productList.html',
                controller: PracticeStuff.Controllers.ProductController,
                controllerAs: 'controller'
            })
            .state('addProduct', {
                url: '/addProduct',
                templateUrl: '/ngApp/views/addProduct.html',
                controller: PracticeStuff.Controllers.ProductController,
                controllerAs: 'controller'
            })
            .state('removeProduct', {
                url: '/removeProduct/:id',
                templateUrl: '/ngApp/views/deleteProduct.html',
                controller: PracticeStuff.Controllers.ProductController,
                controllerAs: 'controller'
            })
            .state('editProduct', {
                url: '/editProduct/:id',
                templateUrl: '/ngApp/views/editProduct.html',
                controller: PracticeStuff.Controllers.EditProductController,
                controllerAs: 'controller'
            })
            .state('serviceRequestList', {
                url: '/serviceRequestList',
                templateUrl: '/ngApp/views/serviceRequestList.html',
                controller: PracticeStuff.Controllers.ServiceRequestController,
                controllerAs: 'controller'
            })
            .state('srDetails', {
                url: '/srDetails/:id',
                templateUrl: '/ngApp/views/srDetails.html',
                controller: PracticeStuff.Controllers.SRDetailsController,
                controllerAs: 'controller'
            })
            .state('addServiceRequest', {
                url: '/addServiceRequest',
                templateUrl: '/ngApp/views/addServiceRequest.html',
                controller: PracticeStuff.Controllers.ServiceRequestController,
                controllerAs: 'controller'
            })
            .state('removeServiceRequest', {
                url: '/removeServiceRequest/:id',
                templateUrl: '/ngApp/views/deleteServiceRequest.html',
                controller: PracticeStuff.Controllers.ServiceRequestController,
                controllerAs: 'controller'
            })
            .state('editServiceRequest', {
                url: '/editServiceRequest/:id',
                templateUrl: '/ngApp/views/editServiceRequest.html',
                controller: PracticeStuff.Controllers.EditServiceRequestController,
                controllerAs: 'controller'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/ngApp/views/contact.html',
                controller: PracticeStuff.Controllers.ContactController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    
    angular.module('PracticeStuff').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );

    angular.module('PracticeStuff').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

    

}
