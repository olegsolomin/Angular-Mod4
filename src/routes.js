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
      templateUrl: 'templates/categories.list.template.html',
      controller: 'CategoriesController as ctrl',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    // Item detail page
    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'templates/items.list.template.html',
      controller: 'ItemsController as itctrl' ,
      resolve: {
      menu_items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
      }
    });
}

})();
