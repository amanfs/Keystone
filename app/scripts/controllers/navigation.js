'use strict';

angular.module('keystoneApp')
  .controller('NavigationCtrl', function ($scope, $location) {
    $scope.navItems = [{title: 'Home', link: '/'}, {title: 'About', link: '/#/about-us'}, {title: 'Products', link: '/#/products'}, {title: 'Contact us', link: '/#/contact-us'}];
  });
