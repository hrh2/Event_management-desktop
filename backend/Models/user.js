const mongoose = require('mongoose');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Additional properties can be added as per your requirements
  fullName: { type: String },
  phoneNumber: { type: String },
  // ...
});

const User = mongoose.model('User', userSchema);

// Validation function
const validateUser = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().label('Username'),
    email: Joi.string().email().required().label('Email'),
    password: passwordComplexity().required().label('Password'),
    fullName: Joi.string().label('Full Name'),
    phoneNumber: Joi.string().label('Phone Number'),
    // ...
  });

  return schema.validate(data);
};

module.exports = {
  User,
  validateUser,
};
