const express = require('express');

const router = express.Router();

const Options = require("../models/option.js");
const Users = require("../models/users.js");

router.post('/buy/:option', async (req, res) => {
  const { username, amount } = req.body;
  const { option } = req.params;

  try {
    console.log(username);
    const user = await Users.findOne({ username }).exec();
    if (!user) {
      res
        .status(404)
        .json({ success: false, message: `User '${username}' not found` });
      return;
    }
    console.log('user found: ' + user);

    // Find the option by name
    const optionToAdd = await Options.findOne({ name: option }).exec();
    if (!optionToAdd) {
      res
        .status(404)
        .json({ success: false, message: `Option '${option}' not found` });
      return;
    }
    console.log(
      'option found: ' + optionToAdd.name + ' - ' + optionToAdd.price,
    );

    let optionFound = false;
    user.carrots.forEach((value, key) => {
      console.log(value);
      if (key == optionToAdd.name) {
        user.carrots.set(key, value + amount);
        optionFound = true;
      }
    });

    if (!optionFound) {
      user.carrots.set(optionToAdd.name, amount);
    }

    if (user.wallet >= optionToAdd.price) {
      user.wallet = user.wallet - optionToAdd.price * amount;
    } else {
      res.status(404).json({ success: false, message: `Wallet Insufficient` });
      return;
    }

    console.log('bef save:' + user);
    // Save the updated user object
    await user.save();

    res.json({
      success: true,
      message: `Option '${option}' added to carrots`,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

router.post('/sell/:option', async (req, res) => {
  const { username, amount } = req.body;
  const { option } = req.params;

  try {
    console.log(username);
    const user = await Users.findOne({ username }).exec();
    if (!user) {
      res
        .status(404)
        .json({ success: false, message: `User '${username}' not found` });
      return;
    }
    console.log('user found: ' + user);

    // Find the option by name
    const optionToSell = await Options.findOne({ name: option }).exec();
    if (!optionToSell) {
      res
        .status(404)
        .json({ success: false, message: `Option '${option}' not found` });
      return;
    }
    console.log(
      'option found: ' + optionToSell.name + ' ' + optionToSell.price,
    );

    let optionFound = false;
    user.carrots.forEach((value, key) => {
      console.log(value);
      if (key == optionToSell.name) {
        if (value < amount) {
          res.status(400).json({
            success: false,
            message: `Not enough '${option}' to sell`,
          });
          optionFound = true; // Option was found but not enough to sell
          return;
        }
        user.wallet += optionToSell.price;
        user.carrots.set(key, value - amount);
        optionFound = true;
      }
    });

    if (!optionFound) {
      res.status(400).json({
        success: false,
        message: `Option '${option}' not found in user's carrots`,
      });
      return;
    }

    console.log('bef save:' + user);
    // Save the updated user object
    await user.save();

    // res.json({ success: true, message: `Option '${option}' sold from carrots`, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
