(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);
function CategoriesController(items) {
var ctrl = this;
ctrl.categories_list = items.data;
}

})();
