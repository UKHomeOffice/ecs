'use strict';

const hof = require('hof');
const config = require('./config.js');
const logger = require('hof/lib/logger')({ env: config.env });

let settings = require('./hof.settings');

settings = Object.assign({}, settings, {
  behaviours: settings.behaviours.map(require),
  routes: settings.routes.map(require)
});

const app = hof(settings);

app.use((req, res, next) => {
  res.locals.htmlLang = 'en';
  res.locals.feedbackUrl = config.survey.feedbackUrl;
  next();
});


module.exports = app;
