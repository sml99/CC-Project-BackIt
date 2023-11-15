const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const fs = require('fs');

// Load users from users.json
let users = [];
fs.readFile('users.json', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    users = JSON.parse(data);
});

// User Registration
router.post('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { email: req.body.email, password: hashedPassword };
    users.push(user);

    // Save users to users.json
    fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send();
        }
        console.log("Users saved to users.json");
        res.status(201).send();
    });
});

// User Login
router.post('/login', async (req, res) => {
    const user = users.find(user => user.email === req.body.email);
    if (user == null) {
        return res.status(400).send('Cannot find user');
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            res.json({ accessToken: accessToken });
            console.log("🚀 ~ file: users.js:39 ~ router.post ~ accessToken", accessToken)
        } else {
            res.send('Not Allowed');
        }

    } catch {
        res.status(500).send();
    }
});

module.exports = router;