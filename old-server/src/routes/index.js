const express = require('express');

const router = express.Router();

// disregard favicon error
router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/', (req, res) => {
  res.send({ message: 'Hello world' });
});

module.exports = router;
