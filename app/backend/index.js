require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const usersRoutes = require('./routes/users/auth');
const projectsRoutes = require('./routes/projects/projects');
const pledgesRoutes = require('./routes/pledges');
const commentsRoutes = require('./routes/comments');
const {
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USER,
  MONGO_IP
} = require('./config');

const app = express();
const port = process.env.PORT || 3000;

let retryCount = 0;

const connectWithRetry = async () => {
  if (retryCount >= 10) {
    console.log('Failed to connect to DB after 10 attempts, stopping...');
    return;
  }

  try {
    await mongoose.connect(
      `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/`
    );
    console.log('Successfully connected to DB');
  } catch (e) {
    console.log(e);
    retryCount++;
    setTimeout(connectWithRetry, 5000);
  }
};

connectWithRetry();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', usersRoutes);
app.use('/api/projects', projectsRoutes);
// app.use('/api/projects', pledgesRoutes);
// app.use('/api/projects', commentsRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
