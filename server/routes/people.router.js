const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

const User = require('../models/User');


router.get('/', authMiddleware, async (req, res) => {

  try {
    const users = await User.find({})
    return res.status(200).json({
      users
    })

  } catch (e) {

  }
})

module.exports = router;
