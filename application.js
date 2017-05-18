var app=angular.module("myApp",['ngRoute']);
app.config(["$locationProvider",function($locationProvider){
  $locationProvider.hashPrefix('')
}])
app.config(["$routeProvider",function($routeProvider){
 $routeProvider
		 .when("/",{
		 	templateUrl:"pages_application/Home.html",
		 	controller:"myHomeController"
		 })
		 .when("/About_us",{

		 	templateUrl:"pages_application/About_us.html",
		 	controller:"myLoginController"
		 })
		 .when("/Login",{
		 	templateUrl:"pages_application/Login.html",
		 	controller:"myRegisterController"
		 })
}])
app.controller("myHomeController",["$scope",function($scope){
	$scope.message="This is Home Page";
}])
app.controller("myLoginController",["$scope",function($scope){
  $scope.message="This is Login page";
}])
app.controller("myAboutusController",["$scope",function($scope){
	$scope.message="This is About_us Page";
}])