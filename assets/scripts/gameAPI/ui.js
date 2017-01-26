'use strict';

const player = require('../game/player.js');

const createSuccess = function () {
  player.playerInit();
  console.log('Success!');
};

module.exports = {
  createSuccess,
};
