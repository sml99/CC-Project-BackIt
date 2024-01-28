const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please enter your full name'],
    trim: true
  },
  username: {
    type: String,
    required: [true, 'Please enter your username'],
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please enter your password']
  },
  profilePicture: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    default: ''
  },
  socialMediaLinks: {
    type: Object,
    default: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedin: ''
    }
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
