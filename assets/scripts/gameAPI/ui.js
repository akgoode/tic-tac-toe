'use strict';

const board = require('../game/board.js');
const gameStore = require('../gameStore.js');

const createSuccess = function () {
  if (gameStore.game !== {}) {
    board.endGame();
  }

  board.boardInit();
};

const showGamesSuccess = function (data) {
  $('.getwins').text(board.getUserWins(data));
};

const showGameSuccess = function (data) {
  $('.gameid').text(data.game.id + '');
  $('.gamecells').text(data.game.cells);
  $('.player').text(data.game.player_x.email);
  $('.over').text(data.game.over);
};

const failure = () => {
  $('#statusbar').text('There was an error. Please try again.');
};

module.exports = {
  createSuccess,
  showGamesSuccess,
  showGameSuccess,
  failure,
};
