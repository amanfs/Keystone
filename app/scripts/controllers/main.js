'use strict';

angular.module('keystoneApp')
  .controller('MainCtrl', function ($scope) {
    $scope.navItems = [{title: 'Home', link: '#'}, {title: 'About', link: '#'}, {title: 'Products', link: '#'}, {title: 'Contact us', link: '#'}];
    
  });
