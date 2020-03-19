require('dotenv').config();
const server = require('./api/server.js');

// Extracting it out - process obj = env. It's a JS obj - We have access to read those env. Make the port be assigned by the Server - Heroku - reading the PORT dynamically
// Heroku will place the .PORT environment value on their server
const port = process.env.PORT || 5000; // how to get this info out of the environment - built in obj process.env - (environment) - PORT - industry standard, unix - It will work on Heroku - If a provider doesn't have PORT in the documentation, ask what is the name of the PORT, environment variable? 
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

// CICD pipeline stages: Continuous Integration 
// * development (dev)
// * test
// * staging
// * --- manual gate
// * production

// Every IOS system has an environment variable values - retrieve a port number as a command line option
// Set an environment variable 
// Mac: export PORT=4002 --> env --> unset PORT --> env
// download dotenv into package.json