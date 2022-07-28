const { model, Schema, ObjectId } = require('mongoose');


const File = Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  path: { type: String, default: '' },
  user: { type: ObjectId, ref: 'User' },
})

module.exports = model('File', File)
