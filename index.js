require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 4000;

server.listen(4000, () => {
  console.log(`\n*** Server Running on Port ${port} ***\n`);
});

// When running locally the ip is taken up by localhost
// and we can hardcode anny old port (over 3000) in.

// When deploying heroku will assign an IP address
// we can't hardcode in the port. Instead heroku needs to tell us 
// which port (because it might be taken).

// adding extra notes sucks sometimes
