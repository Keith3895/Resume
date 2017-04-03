var app = angular.module('pheno',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		template : html
	})
	.when('/node',{
		template : node
	})
	.when('/express',{
		template: express
	})
	.when('/mongo',{
		template: mongo
	})
	.when('/botbuilder',{
		template:bot,
		controller: "colap"
	})
	.when('/json',{
		template: json
	})
	.when('/luis',{
		template: luis
	})
	.otherwise({
		template:"<h1>I'm still working on this, I'll send you the update soon.</h1>"
	});
});
app.controller('routes',function($scope){
	$scope.selected='none';
	$scope.first = function(){
		$('.button-collapse').click();
		
	};
	$scope.node = function(){
		$('.dropdown-button.node').dropdown('open');
	};
});
app.controller('colap',function($scope){
	$(document).ready(function(){$('.collapsible').collapsible();});
	
	$scope.dialog=function(Id) {
			$('html, body').animate({ scrollTop: $("#dialog").offset().top-39}, 1500);
		}

});
// app.controller('index',function($scope){
// });







