(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeController as home'
    })

    .state('categories', {
      url: '/menu-list/{category}',
      templateUrl: 'templates/categories.html',
      controller: 'CategoriesController as categories'
    })

    .state('items', {
      url: '/item-detail/{itemId}',
      templateUrl: 'templates/items.html',
      controller: 'ItemsController as items' ,
      resolve: {
      items: ['MenuDataService', function (MenuDataService) {
      return MenuDataService.getItemsForCategory();
      }]
      }
    });
}

})();
