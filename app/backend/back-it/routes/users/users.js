const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const fs = require('fs');
const SECRET_KEY = 'tempSecret';
// Load users from users.json
let users = [];

const readUsers = async () =>
  fs.readFile('users.json', (err, data) => {
    users = JSON.parse(data);
  });

readUsers();

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// User Registration
router.post('/register', async (req, res) => {
  // Check if email already exists
  const existingUser = users.find(user => user.email === req.body.email);
  if (existingUser) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = { email: req.body.email, password: hashedPassword };
  users.push(user);

  // Save users to users.json
  fs.writeFile('users.json', JSON.stringify(users, null, 2), err => {
    if (err) {
      return res.status(500).send();
    }
    res.status(201).send();
  });
});

// User Login
router.post('/login', async (req, res) => {
  await readUsers();
  const user = users.find(user => user.email === req.body.email);
  if (user == null) {
    return res.status(400).send('Cannot find user');
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(user, SECRET_KEY);

      res.json({ accessToken: accessToken });
    } else {
      res.status(401).send('Not Allowed');
    }
  } catch {
    res.status(500).send();
  }
});

router.get('/me', authenticateToken, (req, res) => {
  const { password, ...userData } = req.user;
  res.json(userData);
});

module.exports = router;
