require('dotenv').config();

const port = process.env.PORT; // eslint-disable-line no-undef
const server = require('./src/app.js');

server.listen(port, async() => {
	console.log(`%s listening at ${port}`); // eslint-disable-line no-console
});
