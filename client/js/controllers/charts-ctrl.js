(function(){

	var app = angular.module('app');

	app.controller('ChartsCtrl', ['$scope', '$http', '$interval', 'socket', function($scope, $http, $interval, socket){

		//Libraries Needed
		$scope.$parent.loadScript('../../vendors/bower_components/salvattore/dist/salvattore.min.js', 'text/javascript', 'utf-8');

		//Flot
		$scope.$parent.loadScript('../../demo/js/flot-charts/dynamic.js', 'text/javascript', 'utf-8');
		$scope.$parent.loadScript('../../demo/js/flot-charts/line.js', 'text/javascript', 'utf-8');
		$scope.$parent.loadScript('../../demo/js/flot-charts/pie.js', 'text/javascript', 'utf-8');


	}]);


})();