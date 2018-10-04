(function () {
	'use strict';
	angular
		.module('ComponentApp', []);
})();


(function () {
	'use strict';
	angular
		.module('ComponentApp')
		.component('customComponent', {
			bindings: {
				dataName: '<'
			},
			templateUrl: 'html/template.html',
			controller: 'myCtrl',
			controllerAs: 'firstCtrl'
		});
})();


(function () {
	'use strict';
	angular
		.module('ComponentApp')
		.component('customComponent1', {
			bindings: {
				name: '<'
			},
			templateUrl: 'html/table.html',
			controller: 'myCtrl1',
			controllerAs: 'secondCtrl'
		});
})();

(function () {
	'use strict';
	angular
		.module('ComponentApp')
		.controller('myCtrl', function () {
			var vm = this;
			vm.dataObject = {
				name: "namratha",
				age: "22"
			};
			vm.dataName = "BrandName";

			vm.menuBar = [{
				name: "Home",
				component: "home"
			}, {
				name: "About",
				component: "about"
			}, {
				name: "Contact",
				component: "contact"
			}];
		});
})();
(function () {
	'use strict';
	angular
		.module('ComponentApp')
		.controller('myCtrl1', function () {
			var vm = this;
			vm.name = "User Table"
			vm.records = [{
				name: "Namratha",
				city: "Hyderabad",
				country: "India"
			}, {
				name: "Abhilash",
				city: "Hyderabad",
				country: "India"
			}, {
				name: "Nagalatha",
				city: "Khammam",
				country: "India"
			}];
		})
})();