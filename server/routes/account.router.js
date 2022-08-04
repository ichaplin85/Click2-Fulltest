const express = require('express');

const User = require('../models/User');
const authMiddleware = require('../middleware/auth.middleware')
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const { v4: uuidv4 } = require('uuid');
const staticFile = process.env.STATIC_PATH;




router.put('/', [
  check('password', 'Password must be longeer than 8 and shorter 16').isLength({ min: 8, max: 16 })

], authMiddleware, async (req, res) => {


  console.log(req.body, req.files.file);
  console.log(req.user);

  const { name } = req.body;
  const file = req.files.file;
  const password = await bcrypt.hash(req.body.password, 5);

  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({ message: "Uncorrect request", errors })
      return
    }

    const user = await User.findOneAndUpdate({ id: req.user.id }, { password });

    const avatarName = uuidv4() + ".jpg"
    file.mv(`${staticFile}/${avatarName}`)
    user.avatar = avatarName
    user.name = name;

    await user.save()
    console.log(user);

    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        birthdate: user.birthdate,
        avatar: user.avatar
      },
    })

  } catch (e) {
    return res.status(401).json({ message: 'Uncorresct request' })
  }
})

router.delete('/', async (req, res) => {

})

module.exports = router;
