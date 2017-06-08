angular.module('ccApp')
	.factory('ApiService', function ($http) {
  function getAllProfiles () {
    return $http.get('/api/profiles')
				.then(response => response.data)
  }

  function addProfile (data) {
    return $http.post('/api/profiles', data)
				.then(response => response.data)
  }

		// function removePizza( id ) {
		// 	return $http.delete(`/api/pizza/${id}`)
		// 		.then( response => response.data )
		// }

  return { getAllProfiles, addProfile }
})
