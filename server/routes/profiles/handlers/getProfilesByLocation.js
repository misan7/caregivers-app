const Profile = require(__base + 'models/Profile')

function getProfileByLocation(req, res) {
	const location = req.params.location
	const locationSearchRegex = new RegExp(location, 'gi');

	Profile.find({'location': {$regex: locationSearchRegex}})
		.then( profiles => {
			res.json(profiles)
		})
}

module.exports = getProfileByLocation