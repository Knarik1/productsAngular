/**
 * Created by user on 12/2/2016.
 */
var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider){
    $routeProvider
        .when('/products', {
            templateUrl: 'frontend/modules/products/view/productList.html',
            controller: 'ProductListCtrl'
        })
    .when('/product/:productId', {
        templateUrl: 'frontend/modules/products/view/productView.html',
        controller: 'ProductViewCtrl'
    });
})