const mongoose = require('mongoose');
// user.model.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String,required: true, unique: false},
  phoneNumber: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
