const Profile = require(__base + 'models/Profile')

function addProfile( req, res ) {
	const { name, location, description, experience, education, price, abailability, phone, profileImage } = req.body
	const profile	= new Profile( { name, location, description, experience, education, price, abailability, phone, profileImage } )
	profile.save()
		.then( () => res.status(200).json({ msg: 'profile added properly'}) )
		.catch( () => res.status(500).json({ msg: 'error adding profile'}) )
}

module.exports = addProfile