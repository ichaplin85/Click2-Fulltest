const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const router = express.Router();
const secretKey = process.env.JWT_SECRET;


router.get('/', (req, res) => {


});

router.post('/', async (req, res) => {

  let checkUser;
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
        email: email.id,
        name: user.name
      }
    })
  } catch (err) {
    console.log('errrerer check user', err);
  }
  console.log('login-router-checkuser---->', checkUser);
  if (checkUser) {
    req.session.userId = checkUser.id;
    req.session.userEmail = checkUser.email;
    req.session.userName = checkUser.name;
    return res.status(200).json({ message: "User exist" });
  } else {
    return res.status(401).json({ message: "This user doesnt exist" });
  }
});
module.exports = router;
