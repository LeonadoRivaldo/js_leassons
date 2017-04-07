(function(){
var ponto = angular.module('ponto',['timer']);

ponto.controller('PontoController', ['$scope', 'Timer', '$log', function($scope, Timer, $log){
	
$scope.registrar = function(element){
	console.log("oi");
}

}])

ponto.directive('registerCard', ['$log', function($log){
	var templateHtml = 
	`<div id="{{id}}">\n
	 	{{label}} :\n
	 	<span class='hour'>{{hour}}</span>\n
	 	<a href="#!" ng-click="registrar()" class="send secondary-content"><i class="material-icons">query_builder</i></a>\n
	</div>`;
	return{
		restrict:'E',
		template:templateHtml,
		scope:{
			id: '@elementId',
			label: '@label',
			hour:'=ngModel'
		},
		controller: ['$scope', function($scope) {
			$scope.registrar = function(){
				$scope.hour = new Date();
			} 
		}]
	}
}]);

})();