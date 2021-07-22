require('dotenv').config();
const express = require('express');

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.API_KEY); // eslint-disable-line no-undef

var router = express.Router();
module.exports = router;

const pageSize = 10;

router.get('/', async (req, res, next) => {
	try {
		const { location, page } = req.query;

		const parkings = await client.search({
			categories: 'parking',
			location
		});
	
		const total = parkings.jsonBody.total;
		let offset = total - (pageSize * page);
		if (offset < 0) offset = 0;
		const rankedParkings = await client.search({
			categories: 'parking',
			sort_by: 'rating',
			limit: pageSize,
			location,
			offset,
		});
	
		res.send(rankedParkings.jsonBody.businesses.reverse());
	} catch (err) {
		next(err);
	}
});
