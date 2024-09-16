/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();

const Options = require("../models/option");
const Users = require("../models/users");

router.get('/', async (req, res) => {
  const options = await Options.find();
  res.json({ message: 'Connected to Database', options });
});

router.post('/test', async (req, res) => {
  console.log('Request received');
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  res.json({ message: 'Request received' }); // Ensure response is sent back
});

router.post('/user', async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ username }).exec();
  if (user) {
    res.json(user);
  } else {
    res.json({ success: false, message: 'Invalid username or password' });
  }
});

module.exports = router;
