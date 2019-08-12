const express = require('express');
const helmet = require('helmet');

const Shouts = require('../data/shouts-model.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  Shouts.find()
  .then(shouts => {
    res.status(200).json(shouts);
  })
  .catch (error => {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the shouts' });
  });
});

server.post('/', (req, res) => {
  Shouts.add(req.body)
  .then(shout => {
    res.status(201).json(shout);
  })
  .catch (error => {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot add the shout' });
  });
});

module.exports = server;
