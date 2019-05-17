require('dotenv').config()
const server = require('./api/server.js')
const PORT = process.env.PORT || 8008

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`)
})
