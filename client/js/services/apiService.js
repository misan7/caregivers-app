angular.module('ccApp')

.factory('ApiService', function($http) {

	function getAllProfiles() {
		return $http.get('/api/profiles')
			.then( response => response.data )
	}

	// function addPizza( data ) {
	// 	return $http.post('/api/pizzas', data)
	// 		.then( response => response.data )
	// }

	// function removePizza( id ) {
	// 	return $http.delete(`/api/pizza/${id}`)
	// 		.then( response => response.data )
	// }

	return { getAllProfiles }

})