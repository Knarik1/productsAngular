/**
 * Created by user on 12/2/2016.
 */
app.controller('ProductListCtrl', ['$scope','productService', function($scope, productService ){
    productService.getAllProducts().success(function(data){
        $scope.products = data;
        console.log(data);
    })

}]);