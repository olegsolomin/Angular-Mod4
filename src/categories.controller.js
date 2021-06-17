(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

// simple way - without resolve and ctrl in state
// CategoriesController.$inject = ['MenuDataService'];
// function CategoriesController(MenuDataService) {
// var ctrl = this;
// var promise = MenuDataService.getAllCategories();
// promise.then(function (response) {
//     ctrl.categories_list = response.data;
// })
// }

//proper way
CategoriesController.$inject = ['MenuDataService','items'];
function CategoriesController(MenuDataService,items) {
var ctrl = this;
ctrl.categories_list = items.data;
}

})();
