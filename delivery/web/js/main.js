function AppCtrl($http) {
	this.message = 'Baking your awesome quote';

	$http({
		method: 'GET',
		url: '/api/v1',
		headers: {
			'Accept': 'application/json'
		}
	}).then(function successCallback(response) {
		this.quote = response.data;
		this.message = '';
		console.log(response);
	}.bind(this), function errorCallback(response) {
		console.log(response);
	});
}
