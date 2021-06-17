(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

function ItemsController(menu_items) {
var itctrl = this;
itctrl.items_list = menu_items.data.menu_items;
}

})();
