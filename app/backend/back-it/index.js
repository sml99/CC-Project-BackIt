require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const usersRoutes = require('./routes/users/users');
const projectsRoutes = require('./routes/projects');
const pledgesRoutes = require('./routes/pledges');
const commentsRoutes = require('./routes/comments');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', usersRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/projects', pledgesRoutes);
app.use('/api/projects', commentsRoutes);

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
