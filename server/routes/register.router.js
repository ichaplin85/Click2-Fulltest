const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const router = express.Router();
const sha256 = require('sha256');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

router.get('/', (req, res) => {
  // res.render('register');
});

router.post('/',
  [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longeer than 8 and shorter 16').isLength({ min: 8, max: 16 })

  ],
  async (req, res) => {

    // User.remove({}, (err) => {
    //   console.log('collection removed')
    // });

    const { email, name, birthdate, gender } = req.body;
    const password = await bcrypt.hash(req.body.password, 5);

    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        res.status(400).json({ message: "Uncorrect request", errors })
        return
      }

      const candidate = await User.findOne({ email })
      console.log(candidate)

      if (candidate) {
        return res.status(409).json({ message: `User with email ${email} already exist` })
      }

      const newUser = await User({ name, email, password, birthdate, gender });

      await newUser.save();

      console.log(newUser);

      return res.status(200).json({ message: "User was created" });

    } catch (err) {
      console.log('Register error', err);
      return res.status(401);
    }
    // res.end();
  });

module.exports = router;
