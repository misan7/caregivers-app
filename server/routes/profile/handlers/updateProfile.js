const Profile = require(__base + 'models/Profile')

function updateProfile (req,res) {
	
	const { id } = req.params
	const { name, location, description, experience, education, price, abailability, phone, profileimage } = req.body

	const dataToUpdate = {}
	if (name) dataToUpdate.name = name
	if (location) dataToUpdate.location = location
	if (description) dataToUpdate.description = description
	if (experience) dataToUpdate.experience = experience
	if (education) dataToUpdate.education = education
	if (price) dataToUpdate.price = price
	if (abailability) dataToUpdate.abailability = abailability
	if (phone) dataToUpdate.phone = phone
	if (profileimage) dataToUpdate.profileimage = profileimage

	Profile.findByIdAndUpdate( id, dataToUpdate )
		.then( () => res.status(200).json({ msg: `profile with id ${id} updated properly`}) )
		.catch( () => res.status(500).json({ msg: `error updating profile with id ${id} `}) )
}

module.exports = updateProfile