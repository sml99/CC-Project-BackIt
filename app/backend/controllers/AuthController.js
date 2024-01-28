const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  const { fullName, username, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 12);
  try {
    const user = await User.create({
      fullName,
      username,
      email,
      password: hashPassword
    });
    const { password, ...others } = user._doc;
    res.status(201).json({
      status: 'success',
      data: { ...others }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if email and password exist
    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide email and password'
      });
    }
    // Check if user exists && password is correct
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        status: 'fail',
        message: 'User does not exist'
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect email or password'
      });
    }

    res.status(200).json({
      status: 'success'
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};
