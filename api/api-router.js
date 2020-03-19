const express = require("express");

const Shouts = require("../shouts/shouts-model.js");

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  const environment = process.env;
  const port = process.env.PORT || 5000; // If I don't have one locally, use 5000 - you can define one locally

  res.status(200).json({ api: 'up', port, environment });
});

// router.get("/", async (req, res, next) => { // async & await - reads like a sync code 
//   try {
//     const shouts = await Shouts.find();
//     const messageOfTheDay = process.env.MOTD || 'Hello World!' // Message Of The Day
//     res.status(200).json({ message: messageOfTheDay, shouts });
//     } catch(err) {
//       next(err);
//     }
// });

router.get("/shouts", (req, res, next) => {
  Shouts.find()
    .then(shouts => {
      res.status(200).json(shouts);
    })
    .catch(error => next(error));
});

router.post(("/shouts", (req, res, next) => {
  Shouts.add(req.body)
    .then(shout => {
      res.status(201).json(shout);
    })
    .catch(error => next(error));
});

router.use(errorhandler);

function errorhandler(error, req, res, next) {
  // do something with error before responding
  // like saving it to a db, sending an mail to the admin
  // or using an external logging service 
  res.status(500).json(error.message);
}

module.exports = router;
