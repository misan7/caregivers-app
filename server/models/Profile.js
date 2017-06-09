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
		availability: [String],
		phone: Number,
		profileimage: String,
		topimage: String,
}, {collection:"profiles"})

const Profile = mongoose.model('Profile', ProfileSchema)

module.exports = Profile