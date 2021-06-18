(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['menu_items']
function ItemsController(menu_items) {
var itctrl = this;
itctrl.items_list = menu_items.data.menu_items;
}

})();
