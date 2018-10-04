(function() {
	'use strict';
	angular
	.module('jsonApp',[]);
})();

(function(){
	'use strict';
	angular
	.module('jsonApp')
	.controller('jsonCtrl',['jsonService',function(jsonService){
		var vm = {};
		jsonService.getjson('json/document.json').then(function(data){
		var details = data.response.result;
		vm.arrayDetails =[];
		for(var i=0;i<details.length;i++){
			vm.arrayDetails.push({total : details[i].split(":::")[1].split("::")[0], date : details[i].split(":::")[0] });
		}
		console.log(vm.arrayDetails);
		console.log(details);
	});

		return vm;
	}]);
})();