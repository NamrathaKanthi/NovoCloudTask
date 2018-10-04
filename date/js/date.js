(function(){
	'use strict';
	angular
	.module('DateApp',['ngMaterial','ngMessages']);
})();

(function(){
	'use strict';
	angular
	.module('DateApp')
	.controller('DateCtrl',[function(){
		var Datescope = {};
		Datescope.myDate = new Date();
		return Datescope;
	}]);
})();