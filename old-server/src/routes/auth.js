/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();

const Options = require("../models/option");
const Users = require("../models/users");

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findOne({ username, password }).exec();
    if (user) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

router.post('/createUser', async (req, res) => {
  const { username, password, carrots, wallet } = req.body;

  try {
    // Check if user already exists
    const existingUser = await Users.findOne({ username }).exec();
    if (existingUser) {
      res.json({ success: false, message: 'User already exists' });
    } else {
      // Create new user
      const newUser = new Users({ username, password, carrots, wallet });
      await newUser.save();
      res.json({ success: true, message: 'User created successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
