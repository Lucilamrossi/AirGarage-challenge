require('dotenv').config();

const port = process.env.PORT; // eslint-disable-line no-undef
const server = require('./src/app.js');

server.listen(port || 3001, async() => {
	console.log(`%s listening at ${port || 3001}`); // eslint-disable-line no-console
});
