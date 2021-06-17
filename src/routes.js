(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to HOME if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
  //Home Page
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.template.html'
    })
   // Category Page
    .state('categoriesList', {
      url: '/categories-list',
      templateUrl: 'templates/categories.template.html',
      controller: 'CategoriesController as ctrl',
      resolve: {
      items: ['MenuDataService', function (MenuDataService) {
      return MenuDataService.getAllCategories();
      }]
      }
    })
    // Item detail page
    .state('items', {
    //   url: '/item-detail/{itemId}',
    templateUrl: 'templates/items.template.html',
    //   controller: 'ItemsController as items' ,
    //   resolve: {
    //   items: ['MenuDataService', function (MenuDataService) {
    //   return MenuDataService.getItemsForCategory();
    //   }]
    //   }
    });
}

})();
