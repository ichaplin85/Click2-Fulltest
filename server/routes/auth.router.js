const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const authMiddleware = require('../middleware/auth.middleware')
const router = express.Router();
const secretKey = process.env.JWT_SECRET;



router.get('/', authMiddleware, async (req, res) => {
  console.log('authrouter');

  try {
    const user = await User.findOne({ _id: req.user.id });

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
