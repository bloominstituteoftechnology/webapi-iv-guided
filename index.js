require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`  Server Running on http://localhost:${port}   `);
});
