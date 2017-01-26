'use strict';

const player = require('../game/player.js');
const board = require('../game/board.js');
const gameStore = require('../gameStore.js');

const createSuccess = function () {
  if(gameStore.game !== {}){
    board.endGame();
  }
  player.playerInit();
  console.log('Success!');
};

const showGamesSuccess = function (data) {
  console.table(data);
};

const showGameSuccess = function (data) {
  console.log(data);
  //board.openGame(data.game);
};

module.exports = {
  createSuccess,
  showGamesSuccess,
  showGameSuccess,
};
