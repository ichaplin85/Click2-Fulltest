const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const router = express.Router();
const secretKey = process.env.JWT_SECRET;


router.get('/', (req, res) => {


});

router.post('/', async (req, res) => {
  console.log('login');

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ messgae: "User not found" })
    }
    console.log(user);
    const correctPassword = await bcrypt.compare(password, user.password)

    if (!correctPassword) {
      return res.status(400).json({ message: "Invalid password" })
    }

    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' })

    return res.status(200).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        birthdate: user.birthdate,
        avatar: user.avatar
      }
    })
  } catch (err) {
    console.log('Error check user', err);
  }

});
module.exports = router;
