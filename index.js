const server = require('./api/server.js');

// you need to specify proces.env.PORT for Heroku to work,
// but oin development environment, it won't work (it's undefined) ,so you
// need a condition to add port number
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
