'use strict';

const board = require('./board.js');
const userInfo = require('../store.js');

const Player = function () {
  this.id = userInfo.user.id;
  this.email = userInfo.user.email;
};

Player.prototype.createBoard = function(gameId) {
  board.boardInit(gameId);
};

Player.prototype.displayUser = function() {
  console.log(this.id, this.email);
};

const playerInit = function () {
  const player1 = new Player();
  board.boardInit(player1);
};

module.exports = {
  playerInit,
};
