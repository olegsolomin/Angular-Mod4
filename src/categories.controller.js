(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {

var ctrl = this;

var promise = MenuDataService.getAllCategories();

promise.then(function (response) {
    ctrl.categories_list = response.data;
})

})();
