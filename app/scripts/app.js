'use strict';

angular.module('keystoneApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
      .when('/products', { templateUrl: 'views/product.html', controller: 'ProductCtrl' })
      .when('/products/:productId', { templateUrl: 'views/products.html', controller: 'ProductCtrl' })
      .when('/contact-us', { templateUrl: 'views/contact.html', controller: 'ContactCtrl' })
      .when('/about-us', { templateUrl: 'views/about.html', controller: 'AboutCtrl' })   
      .otherwise({ redirectTo: '/' });
  });
