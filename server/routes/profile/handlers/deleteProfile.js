const Profile = require(__base + 'models/Profile')

function deleteProfile (req,res) {

	const { id } = req.params
	
	Profile.findByIdAndRemove( id )
		.then( () => res.status(200).json({ msg: `profile with id: ${id} -> removed properly`}) )
		.catch( () => res.status(500).json({ msg: `error deleting profile with id: ${id} `}) )
}

module.exports = deleteProfile