var app=angular.module("myApp",["ngRoute"]);

app.config(["$locationProvider","$routeProvider",function($locationProvider,$routeProvider){
 $locationProvider.hashPrefix('')
$routeProvider
  .when("/Home",{

  	templateUrl:"pages/Home.html",
  	controller:"myHomeController"
  })
   .when("/Register",{
      templateUrl:"pages/Register.html",
      controller:"myRegisterController"
   })
   .when("/Login",{
      templateUrl:"pages/Login.html",
      controller:"myLoginController"
   })
app.controller("myHomeController",["$scope",function($scope){
	$scope.message="This is Angular Home Page";
}])
app.controller("myRegisterController",["$scope",function($scope){
	$scope.message="This is Angular  Register Page";
}])
app.controller("myLoginController",["$scope",function($scope){
	$scope.message="This is Angular Login Page";
}])
 console.log("this is config");
}])