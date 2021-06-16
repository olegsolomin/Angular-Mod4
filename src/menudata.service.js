(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['getAllCategories', 'getItemsForCategory']
function MenuDataService(getAllCategories, getItemsForCategory) {
  var service = this;

    getAllCategories.$inject =['$http'];
    function getAllCategories($http) {
        var service = this;

        service.getAllCategories = function () {
            var response = $http({
                method: "GET",
                url:  "https://davids-restaurant.herokuapp.com/categories.json"
            });
            return response;

        }
    };

    getItemsForCategory.$inject =['$http'];
    function getItemsForCategory($http) {
        var service = this;

        service.getItemsForCategory = function (category) {
            var response = $http({
                method: "GET",
                url:  ("https://davids-restaurant.herokuapp.com/categories.json" + category)
            });
            return response;

        }
    }
}
})();
