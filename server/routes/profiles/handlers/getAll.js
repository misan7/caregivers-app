const Profiles = require(__base + 'models/Profile')

function getAll( req, res ) {

	Profiles.find()
		.then( showProfiles => {
			res.json(showProfiles)
		})
       
}

module.exports = getAll