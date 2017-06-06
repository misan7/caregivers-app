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
		description: {
			type: String
		},
		experience: {
			type: String
		},
		education: {
			type: String
		},
		price: {
			type: Number
		},
		abailability: {
			type: String
		},
		phone: {
			type: Number
		},
		profileimage: {
			type: String
		}
}, {collection:"profiles"})

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile