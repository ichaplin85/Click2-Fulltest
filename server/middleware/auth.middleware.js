const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;



module.exports = (req, res, next) => {

  if (req.method === 'OPTIONS') {
    return next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
      return res.status(401).json({ message: 'Auth error token' })
    }

    const decoded = jwt.verify(token, secretKey)
    req.user = decoded;

    next()
  } catch (error) {
    return res.status(401).json({ message: 'Auth error another' })
  }
}
