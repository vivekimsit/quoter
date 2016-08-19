function AppCtrl($http, $timeout) {
	var vm = this;

	vm.message = 'Baking your awesome quote';
	vm.quote = null;

	function readQuote() {
		vm.quote = null;
		$http({
			method: 'GET',
			url: '/api/v1',
			headers: {
				'Accept': 'application/json'
			}
		}).then(function successCallback(response) {
			vm.quote = response.data;
			vm.message = '';
			$timeout(readQuote, 5000 /* request next quote after 5 secs */);
		}, function errorCallback(response) {
			console.log(response);
		});
	}

	readQuote();
}
