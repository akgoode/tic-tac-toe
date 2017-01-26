'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const events = require('./auth/events.js');
const gameEvents = require('./gameAPI/events.js');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

//require('./board');

$(() => {
  // TODO add handlers
  events.addHandlers();
  gameEvents.addHandlers();
});
