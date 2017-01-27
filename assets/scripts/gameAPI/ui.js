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
  console.log(board.getUserWins(data));
};

const showGameSuccess = function (data) {
  console.log(data);
  console.log(data.game.id);
  $('.gameid').text(data.game.id + '');
  $('.gamecells').text(data.game.cells);
  $('.player').text(data.game.player_x.email);
  $('.over').text(data.game.over);
  //board.openGame(data.game);

};

module.exports = {
  createSuccess,
  showGamesSuccess,
  showGameSuccess,
};
