const express = require('express');
const helmet = require('helmet');

const db = require('../data/db.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', async (req, res) => {
  try {
    const shoutouts = await db('shoutouts');
    const messageOfTheDay = process.env.MOTD || 'Hello World!'; // add this line
    res.status(200).json({ motd: messageOfTheDay, shoutouts }); // change this line
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
  }
});

server.post('/', async (req, res) => {
  // shoutouts.add(req.body)
  // .then(shoutouts => {
  //   res.status(201).json(shoutouts);
  // })
  // .catch (error => {
  //   console.error('\nERROR', error);
  //   res.status(500).json({ error: 'Cannot add the shoutout' });
  // });
});

module.exports = server;
