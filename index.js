const server = require('./api/server.js');
require('dotenv')

const port = process.env.PORT ? process.env.PORT: 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:4000 ${port}***\n`);
});
