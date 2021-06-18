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
      url: '/categories-detail/{categoryShortName}',
      templateUrl: 'templates/items.template.html',
      params: {
      categoryShortName: 'L'
      },
      controller: 'ItemsController as itctrl' ,
      resolve: {
      menu_items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory()
                .then(function (items) {
                   return items[$stateParams.categoryShortName];
                });
            }]
      }
    });
}

})();
