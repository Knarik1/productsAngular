<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="frontend/node_modules/angular/angular.js"></script>
    <script src="frontend/node_modules/angular-route/angular-route.min.js"></script>

    <script src="frontend/app.js"></script>

    <script src="frontend/modules/products/services/productService.js"></script>


    <script src="frontend/modules/products/controllers/ProductListCtrl.js"></script>
    <script src="frontend/modules/products/controllers/ProductViewCtrl.js"></script>


</head>
<body ng-app="myApp">
<div ng-view></div>
</body>
</html>