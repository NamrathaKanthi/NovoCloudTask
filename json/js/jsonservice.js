(function(){
	'use strict';
	angular
	.module('jsonApp')
	.service('jsonService',function($http,$q){
		this.getjson=function(url){
		var info=$q.defer();
		$http.get(url).success(info.resolve)
		.error(info.reject);
		return info.promise;	
	}
	});
})();