require("dotenv").config();
const server = require("./api/server.js");

const port = process.env.PORT || 5000;
//process.env.PORT makes port dynamic.  To start server, in terminal type export PORT=4000 to set desired port, then start server

//DESTRUCTURING PORT
//const {PORT} = process.env
//server.listen(PORT, () => {
// console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`)})

server.listen(4000, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
