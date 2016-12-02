/**
 * Created by user on 12/2/2016.
 */
app.controller('ProductViewCtrl', ['$scope','$routeParams','productService', function($scope, $routeParams, productService){
    $scope.id = $routeParams.productId;
    productService. getItemProduct($scope.id).success(function(data){
        $scope.product = data;
        console.log(data);
    })


}])