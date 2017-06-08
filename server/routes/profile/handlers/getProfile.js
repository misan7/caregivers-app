const Profile = require(__base + 'models/Profile')

function getProfile( req, res ) {
const id = req.params.id

	Profile.findById(id)
		.then( profile => {
			console.log(profile)
			res.json(profile)
		})
}

module.exports = getProfile