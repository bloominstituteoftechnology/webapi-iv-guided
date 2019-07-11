const express = require('express');
const helmet = require('helmet');

const db = require('../data/db.js');

const server = express();

server.use(helmet());
server.use(express.json());

// server.get('/', async (req, res) => {
//   try {
//     const shouts = await db('shouts');
//     res.status(200).json(shouts);
//     throw new Error('for testing only');
//   } catch (error) {
//     console.error('\nERROR', error);
//     res.status(500).json({ error: 'Cannot retrieve the shouts' });
//   }
// });

server.get('/', async (req, res) => {
  db('shouts')
    .then(shouts => {
      res.status(200).json(shouts);

    })
    .catch(err => {
      res.status(500).json({ error: 'Cannot retrieve the shouts' });
    })
});

// ???????
server.post('/', async (req, res) => {
  try {
    const [id] = await db('shouts').insert(req.body);
    const shouts = await db('shouts');

    res.status(201).json(shouts);
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot add the shout' });
  }
});

module.exports = server;
