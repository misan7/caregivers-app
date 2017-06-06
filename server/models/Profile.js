const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProfileSchema = new Schema({
		name: {
			type: String,
			required: true
		},
		location: {
			type: String,
			required: true
		},
		description: String,
		experience: String,
		education: String,
		price: Number,
		abailability: Number,
		phone: Number,
		profileimage: String
}, {collection:"profiles"})

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile