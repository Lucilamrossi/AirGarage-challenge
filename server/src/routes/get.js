require('dotenv').config();
const express = require('express');

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.API_KEY); // eslint-disable-line no-undef

var router = express.Router();
module.exports = router;

router.get('/', async (req, res, next) => {
	client.search({
		term: 'Four Barrel Coffee',
		location: 'san francisco, ca',
	}).then(response => {
		res.send(response.jsonBody.businesses[0].name);
	}).catch(e => {
		next(e);
	});
});
