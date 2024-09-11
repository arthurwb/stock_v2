const express = require('express');

const router = express.Router();

const Options = require("../models/option.js");
const Users = require("../models/users.js");

router.get('/', async (req, res) => {
  const options = await Options.find();
  res.json({ message: 'Connected to Database', options: options });
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
