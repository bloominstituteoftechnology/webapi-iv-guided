require("dotenv").config();
//grab this file, look for config method. Code executes, reads dotenv file, and then you can use it.

const server = require("./api/server.js");

//make port dynamic

const port = process.env.PORT || 4000;
const greeting = process.env.GREETING;

server.listen(port, () => {
  console.log(
    `\n*** ${greeting} Server Running on http://localhost:${port} ***\n`
  );
});
