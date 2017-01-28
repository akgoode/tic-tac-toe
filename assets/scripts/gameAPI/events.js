'use strict';

const gameAPI = require('./api.js');
const gameStore = require('../gameStore.js');
const ui = require('./ui.js');

const onNewGame = function (event) {
  event.preventDefault();
  gameAPI.createGame()
    .then((response) => {
      gameStore.game = response.game;
      $('.gameid').text(gameStore.game.id + '');
      return gameStore.game;
    })
    .then(ui.createSuccess)
    .catch(ui.failure)
    ;
};

const onShowGames = function (event) {
  event.preventDefault();
  gameAPI.showGames()
    .then(ui.showGamesSuccess)
    .catch(ui.failure)
    ;
};

const onShowGame = function (event) {
  event.preventDefault();
  let id = parseInt($('#game-id').val());
  gameAPI.showGame(id)
    .then(ui.showGameSuccess)
    .catch(ui.showFailure)
    ;
};

const onUnfinishedGames = function (event) {
  event.preventDefault();
  gameAPI.showGames()
    .then(ui.unfinishedSuccess)
    .catch(ui.failure)
    ;
};

const addHandlers = function () {
  $('#creategame').on('click', onNewGame);
  $('#showGames').on('click', onShowGames);
  $('#showGame').on('submit', onShowGame);
  $('#showUnfinished').on('click', onUnfinishedGames);
};

module.exports = {
  addHandlers,
};
