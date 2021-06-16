(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'templates/categories.html',
  bindings: {
    items: '<'
  }
});

})();
