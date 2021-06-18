(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['itemParam'];
function ItemsController(itemParam) {
var itctrl = this;
itctrl.items_list = itemParam.data.menu_items;
}

})();
