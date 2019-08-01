// it's recommended to load configuration for .env as early as possible
//require('dotenv').config(); // add this line as the first thing to run1

const server = require('./api/server.js');

//Dinamically setting the port for deployment purposes
// we'll read the port from the server environment if it is there
// heroku will have the PORT environment variable set
// const port = process.env.PORT ? process.env.PORT : 4000;
//another equivalent option is
const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
