(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/')


// MenuDataService.$inject = ['getAllCategories', 'getItemsForCategory']
// function MenuDataService(getAllCategories, getItemsForCategory) {
//   var service = this;

    MenuDataService.$inject =['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function () {
            var response = $http({
                method: "GET",
                url:  (ApiBasePath + "categories.json")
            });
            return response;

        }
    };

    getItemsForCategory.$inject =['$http','categoryShortName'];
    function getItemsForCategory($http, categoryShortName) {
        var service = this;

        service.getItemsForCategory = function (categoryShortName) {
            var response = $http({
                method: "GET",
                url:  (ApiBasePath + 'menu_items.json?category=' + categoryShortName)
            });
            return response;

        }
    }

})();
