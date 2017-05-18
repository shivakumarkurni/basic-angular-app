var app=angular.module("myApp",['ui.router']);

app.config(["$locationProvider","$stateProvider",function($locationProvider,$stateProvider){
 $locationProvider.hashPrefix('')
$stateProvider
  .state("Home",{
   url:'/Home',
  	templateUrl:"pages/Home.html",
  	controller:"myHomeController",
  	caseInsensitiveMatch : true
  })
   .state("Register",{
   	 url:'/Register',
      templateUrl:"pages/Register.html",
      controller:"myRegisterController",
      caseInsensitiveMatch : true
   })
   .state("Login",{
   	url:'/Login/:id',
      templateUrl:"pages/Login.html",
      controller:"myLoginController",
      caseInsensitiveMatch : true
   })
}])
app.controller("myHomeController",["$scope",function($scope){
	$scope.message="This is Angular Home Page";
}])
app.controller("myRegisterController",["$scope",function($scope){
	$scope.message="This is Angular  Register Page";
}])
app.controller("myLoginController",["$scope",function($scope){
	$scope.message="This is Angular Login Page"+id;
}])
 