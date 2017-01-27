'use strict';

const gameAPI = require('./api.js');
const gameStore = require('../gameStore.js');
const ui = require('./ui.js');
const getFormFields = require('../../../lib/get-form-fields.js');

const onNewGame = function (event) {
  event.preventDefault();
  gameAPI.createGame()
    .then((response) => {
      gameStore.game = response.game;
      $('.gameid').text(gameStore.game.id + '');
      return gameStore.game;
    })
    .then(ui.createSuccess)
    ;
  //console.log(newGame.responseJSON.game + '');
  //console.log(newGame.responseJSON.game);
};

const onShowGames = function (event) {
  event.preventDefault();
  gameAPI.showGames()
    .then(ui.showGamesSuccess)
    ;
};

const onShowGame = function (event) {
  event.preventDefault();
  //let id = getFormFields(event.target);
  let id = parseInt($('#game-id').val());
  gameAPI.showGame(id)
    .then(ui.showGameSuccess)
    ;
};

const addHandlers = function () {
  $('#creategame').on('click', onNewGame);
  $('#showGames').on('click', onShowGames);
  $('#showGame').on('submit', onShowGame);
};

module.exports = {
  addHandlers,
};
