const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const router = express.Router();
const { check, validationResult } = require('express-validator');
const secretKey = process.env.JWT_SECRET;
const staticFile = process.env.STATIC_PATH;


const User = require('../models/User');

router.get('/', (req, res) => {

});

router.post('/',
  [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longeer than 8 and shorter 16').isLength({ min: 8, max: 16 })

  ],
  async (req, res) => {

    const { email, name, birthdate, gender } = req.body;
    const file = req.files.file;


    const password = await bcrypt.hash(req.body.password, 5);

    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        res.status(400).json({ message: "Uncorrect request", errors })
        return
      }

      const candidate = await User.findOne({ email })

      if (candidate) {
        return res.status(409).json({ message: `User with email ${email} already exist` })
      }

      const newUser = await User({ name, email, password, birthdate, gender });

      const avatarName = uuidv4() + ".jpg"
      file.mv(`${staticFile}/${avatarName}`)
      newUser.avatar = avatarName
      await newUser.save()

      console.log(newUser)

      const token = jwt.sign({ id: newUser.id }, secretKey, { expiresIn: '1h' })



      return res.status(200).json({
        token,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          gender: newUser.gender,
          birthdate: newUser.birthdate,
          avatar: newUser.avatar
        }
      })
    } catch (err) {
      console.log('Register error', err);
      return res.status(401);
    }
    // res.end();
  });

module.exports = router;
