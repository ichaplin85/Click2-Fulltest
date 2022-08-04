const { model, Schema, ObjectId } = require('mongoose');

const User = new Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true
  },
  birthdate: {
    type: Date,
    require: true
  },
  gender: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
  }
})

module.exports = model('User', User);
