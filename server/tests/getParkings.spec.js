const { expect } = require('chai');
const request = require('supertest'); 
const Server = require('../src/app'); 

let queries = {
	location: 'Buenos Aires', 
	pageSize: 8, 
	page: 1
};

describe('Parkings Routes - /parkings', () => { 
	describe('GET "/"', () => {
		it('should return parkingLots and totalPages for the request', (done) => {
			request(Server)
				.get('/parkings')
				.query(queries)
				.expect(200)
				.expect('Content-Type', /json/)
				.then((response) => {
					expect(response.body).to.have.property('parkingLots');
					expect(response.body).to.have.property('totalPages');
				})
				.then(() => done())
				.catch((error) => done(error?.message));
		});
		it('should return an amount equal to the pageSize given', (done) => {
			request(Server)
				.get('/parkings')
				.query({...queries, pageSize: 8})
				.expect(200)
				.expect('Content-Type', /json/)
				.then((response) => {
					expect(response.body.parkingLots).to.have.lengthOf(8);
				})
				.then(() => done())
				.catch((error) => done(error?.message));
		});
		it('should return 6 parkingLots if no pageSize is given', (done) => {
			request(Server)
				.get('/parkings')
				.query({...queries, pageSize: null})
				.expect(200)
				.expect('Content-Type', /json/)
				.then((response) => {
					expect(response.body.parkingLots).to.have.lengthOf(6);
				})
				.then(() => done())
				.catch((error) => done(error?.message));
		});
		it('should manage both page and pageSize correctly', (done) => {
			request(Server)
				.get('/parkings')
				.query({...queries, pageSize: 8})
				.expect(200)
				.expect('Content-Type', /json/)
				.then((response) => {
					request(Server)
						.get('/parkings')
						.query({...queries, pageSize: 4, page: 2})
						.then((response2) => {
							expect(response.body.parkingLots.slice(-4)).to.deep.equal(response2.body.parkingLots);
						})
						.then(() => done())
						.catch((error) => done(error?.message));
				});
		});
		it('should return an error if no location is given', (done) => {
			request(Server)
				.get('/parkings')
				.query({...queries, location: null})
				.expect(200)
				.expect('Content-Type', /json/)
				.then(() => done('it should return an error'))
				.catch(() => done());
		});
	});
});
