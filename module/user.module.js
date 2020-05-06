const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'what is your email?']  
   },
  password: {
    type: String,
    required: [true, 'what is your password?']  
   },
  name: {
    type: String,
    required: [true, 'what is your name?']  
   },
  role: {
    type: String,
    required: [true, 'Are you seller or customer?'],
    enum: ['seller', 'customer']
   }
});

const user = mongoose.model('user',UserSchema,'user');
module.exports = user;