(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'templates/items.html',
  bindings: {
    items: '<'
  }
});

})();
