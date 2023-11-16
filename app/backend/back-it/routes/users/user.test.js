const request = require('supertest');
const express = require('express');
const users = require('./users');

const app = express();
app.use(express.json());
app.use('/users', users);

// Tests for the /users endpoints
//Register
describe('POST /register', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/users/register')
      .send({
        email: 'test@example.com',
        password: 'password'
      });
    expect(res.statusCode).toEqual(201);
  });

  it('should not register a user with an existing email', async () => {
    const res = await request(app)
      .post('/users/register')
      .send({
        email: 'test@example.com',
        password: 'password'
      });
    expect(res.statusCode).toEqual(400);
  });
});

//Login
describe('POST /login', () => {
  it('should login a user', async () => {
    const res = await request(app)
      .post('/users/login')
      .send({
        email: 'test@example.com',
        password: 'password'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('accessToken');
  });

  it('should not login a user with incorrect password', async () => {
    const res = await request(app)
      .post('/users/login')
      .send({
        email: 'test@example.com',
        password: 'wrongpassword'
      });
    expect(res.statusCode).toEqual(401);
  });

  it('should not login a user without an email', async () => {
    const res = await request(app)
      .post('/users/login')
      .send({
        password: 'password'
      });
    expect(res.statusCode).toEqual(400);
  });
});

//Me
describe('GET /me', () => {
  it('should return the authenticated user', async () => {
    // First, log in to get a token
    const loginRes = await request(app)
      .post('/users/login')
      .send({
        email: 'test@example.com',
        password: 'password'
      });

    // Then, use the token to authenticate to the /me endpoint
    const res = await request(app)
      .get('/users/me')
      .set('Authorization', `Bearer ${loginRes.body.accessToken}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('email', 'test@example.com');
  });

  it('should not return a user if the token is missing', async () => {
    const res = await request(app).get('/users/me');
    expect(res.statusCode).toEqual(401);
  });
});
