require('dotenv').config();
const express = require('express');

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.API_KEY); // eslint-disable-line no-undef

var router = express.Router();
module.exports = router;

const pageSize = 10

router.get('/', async (req, res, next) => {
	const { location, page } = req.query

	client.search({
		categories: 'parking',
		location
	}).then(response => {
		const total = response.jsonBody.total
		const offset = total - (pageSize * page)

			client.search({
				categories: 'parking',
				sort_by: 'rating',
				limit: pageSize,
				location,
				offset,
			})
			.then(response => res.send(response.jsonBody.businesses.reverse()))
	}).catch(e => {
		next(e);
	});
});
