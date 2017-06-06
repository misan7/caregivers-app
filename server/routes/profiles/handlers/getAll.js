const Profile = require(__base + 'models/Profile')

function getAll( req, res ) {

	Profile.find()
		.then( showProfiles => {
			res.json(showProfiles)
		})
}

module.exports = getAll