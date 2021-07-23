require('dotenv').config();
const express = require('express');

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.API_KEY); // eslint-disable-line no-undef

var router = express.Router();
module.exports = router;

router.get('/', async (req, res, next) => {
	try {
		let { location, page, pageSize } = req.query;

		if(!location) throw new Error('location must be given');
		if(!page) page = 1;
		if(!pageSize) pageSize = 6;

		const parkings = await client.search({
			categories: 'parking',
			location
		});
		
		const total = parkings.jsonBody.total;
		let offset = total - (pageSize * page);
		let limit = pageSize;
		if (offset < 0) {
			limit = pageSize + offset;
			offset = 0;
		}
		const rankedParkings = await client.search({
			categories: 'parking',
			sort_by: 'rating',
			limit,
			location,
			offset,
		});
	
		res.send({parkingLots: rankedParkings.jsonBody.businesses.reverse(), totalPages: Math.ceil(total / pageSize)});
	} catch (err) {
		next(err);
	}
});
