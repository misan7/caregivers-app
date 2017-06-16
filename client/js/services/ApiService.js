angular.module('ccApp')
	.factory('ApiService', function($http) {

		function getAllProfiles() {
			return $http.get('/api/profiles')
				.then(response => response.data)
		}

		function addProfile(data) {
			return $http.post('/api/profiles', data)
				.then(response => response.data)
		}

		function getProfileById(id) {
			return $http.get(`/api/profile/${id}`)
		}

		function getProfilesByLocation(location) {
			return $http.get('/api/profiles/' + location)
				.then(response => response.data)
		}

		function removeProfile( id ) {
			return $http.delete(`/api/profile/${id}`)
				.then( response => response.data )
		}

		return { getAllProfiles, addProfile, getProfileById, getProfilesByLocation, removeProfile }
	})
