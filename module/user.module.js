const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  password: String,
  name: String,
  role: String
});

const user = mongoose.model('user',UserSchema,'user');
module.exports = user;