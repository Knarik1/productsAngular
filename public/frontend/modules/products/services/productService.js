/**
 * Created by user on 12/2/2016.
 */
app.service('productService', ['$http', function($http){
    return {
        getAllProducts: function() {
            return $http.get('http://products.dev/products')
        },
        getItemProduct: function(id) {
            return $http.get('http://products.dev/products/' + id)
        }
    }
}]);
