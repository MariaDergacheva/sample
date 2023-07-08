const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const ssr = require('../middleware/ssr');
const morgan = require('morgan');
// const path = require('path');
require('dotenv').config();

const fileStoreOptions = {};

const sessionConfig = {
  store: new FileStore(fileStoreOptions),
  name: 'auth',
  secret: process.env.SESSION_SECRET || 'test',
  resave: false,
  saveUninitialized: false,
  cookie: {
    path: '/',
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 10 * 1000,
  },
};

module.exports = function serverConfig(app) {
  app.use(morgan('dev'));
  app.use(express.static('public'));
  app.use(session(sessionConfig));
  app.use(express.json());
  app.use(ssr);
};