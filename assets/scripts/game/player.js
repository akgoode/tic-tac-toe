'use strict';

const board = require('./board.js');
const userInfo = require('../store.js');

const Player = function () {
  console.log(this);
  this.id = userInfo.id;
  this.email = userInfo.email;
  this.games = userInfo.games;
};

Player.prototype.createBoard = function(gameId) {
  board.boardInit(gameId);
};

Player.prototype.displayUser = function() {
  console.log(this.id, this.email);
};

const playerInit = function () {
  const player1 = new Player();
  board.boardInit();
};

module.exports = {
  playerInit,
};
