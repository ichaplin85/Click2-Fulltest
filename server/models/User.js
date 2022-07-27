const { model, Schema, ObjectId } = require('mongoose');

const Userr = new Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
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
  // files: [{
  //   type: ObjectId,
  //   ref: 'File'
  // }]

})

module.exports = model('Userr', Userr);
