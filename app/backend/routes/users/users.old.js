const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const User = require('../../models/user');

const SECRET_KEY = 'tempSecret';
let users = [];

// Load users from users.json
const readUsers = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('users.json', (err, data) => {
      if (err) reject(err);
      users = JSON.parse(data);
      resolve();
    });
  });
};

// Write users to users.json`
const writeUsers = async () => {
  if (users.length < 2) {
    console.log('Reading users from users.json');
    await readUsers();
  }
  return new Promise((resolve, reject) => {
    fs.writeFile('users.json', JSON.stringify(users), err => {
      if (err) reject(err);
      resolve();
    });
  });
};

// Middleware for token authentication
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

(async () => {
  await readUsers();
  console.log('Loading ' + users.length + ' users');
})();
// Create a new router
const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
  const {
    fullName,
    email,
    password,
    profilePicture,
    bio,
    socialMediaLinks
  } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User(
    fullName,
    email,
    hashedPassword,
    profilePicture,
    bio,
    socialMediaLinks
  );

  users.push(user);

  try {
    await writeUsers();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

// User Login
router.post('/login', async (req, res) => {
  await readUsers();
  const { email, password } = req.body;
  const user = users.find(user => user.email === email);

  if (!user) {
    return res.status(400).send('Cannot find user');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).send('Not Allowed');
  }

  const accessToken = jwt.sign(user, SECRET_KEY);
  res.json({ accessToken });
});

// Get current user
router.get('/me', authenticateToken, (req, res) => {
  const { password, ...userData } = req.user;
  res.json(userData);
});

module.exports = router;
