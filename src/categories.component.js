(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
