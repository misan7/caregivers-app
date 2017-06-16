const rp = require('request-promise')
const cheerio = require('cheerio')

const URL_BARNA = 'http://www.nidmi.es/cuidado-ancianos/cuidadora-ancianos-barcelona'
const URL_LLEIDA = 'http://www.nidmi.es/cuidado-ancianos/cuidadora-ancianos-lleida'
const URL_GIRONA = 'http://www.nidmi.es/cuidado-ancianos/cuidadora-ancianos-girona'
const URL_MADRID = 'http://www.nidmi.es/cuidado-ancianos/cuidadora-ancianos-madrid'
const URL_CUENCA = 'http://www.nidmi.es/cuidado-ancianos/cuidadora-ancianos-cuenca'
const URL_TARRAGONA = 'http://www.nidmi.es/cuidado-ancianos/cuidadora-ancianos-tarragona'
const URL_VALENCIA = 'http://www.nidmi.es/cuidado-ancianos/cuidadora-ancianos-valencia'
const URL_SEVILLA = 'http://www.nidmi.es/cuidado-ancianos/cuidadora-ancianos-sevilla'
const URL_ZARAGOZA = 'http://www.nidmi.es/cuidado-ancianos/cuidadora-ancianos-zaragoza'
const URL_MURCIA = 'http://www.nidmi.es/cuidado-ancianos/cuidadora-ancianos-murcia'
const URL_TOLEDO = 'http://www.nidmi.es/cuidado-ancianos/cuidadora-ancianos-toledo'
const URL_BADAJOZ = 'http://www.nidmi.es/cuidado-ancianos/cuidadora-ancianos-badajoz'
const URL_ASTURIAS = 'http://www.nidmi.es/cuidado-ancianos/cuidadora-ancianos-asturias'

const caregivers = []

const db = require('../config/db')
const Profile = require('../models/Profile')

const DB_URL = 'mongodb://localhost:27017/keepcalm'
db.open(DB_URL)
console.log(`Connecting to ${DB_URL}...`)


rp(URL_ASTURIAS).then(body => {

	const $ = cheerio.load(body)

	const $caregivers = $('.caregiver-card')

	$caregivers.each( function(index,caregiver) {

		let profileimage = $(caregiver).find('img').attr('src')
		// profileimage = profileimage.replace('http', 'https')
		profileimage = 'http://www.nidmi.es' + profileimage

		let name = $(caregiver).find('.name').text()

		let location = $(caregiver).find('.caregiver-data :nth-child(2)').text()

		const prices = [15, 20, 25, 10]
		const randomPosition = Math.floor( Math.random()*4 )
		let price = prices[randomPosition]

		const experience = $(caregiver).find('.caregiver-data :nth-child(3)').text()

		caregivers.push({ profileimage, name, location, price, experience })
	})

	Profile.create(caregivers)
			.then( () => console.log('caregivers inserted properly '))
			.catch( () => console.log('there was an error inserting caregivers'))

	// For showing on the console every consult
	// console.log(caregivers); 
})
