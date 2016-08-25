function AppCtrl($http, $timeout, $location) {
	var vm = this;
	var message = 'Baking your awesome quote';

	vm.message = message;
	vm.quote = null;

	function readQuote() {
		var query = $location.search();
		vm.quote = null;
		$http({
			method: 'GET',
			url: '/api/v1/quotes',
			params: {
				author: !!query ? query.author : '',
				category: !!query ? query.category : ''
			},
			headers: {
				'Accept': 'application/json'
			}
		}).then(function successCallback(response) {
			vm.quote = response.data;
			vm.message = '';
			$timeout(readQuote, 5000 /* request next quote after 5 secs */);
		}, function errorCallback(response) {
			vm.message = message;
			console.log(response);
		});
	}

	readQuote();
}
