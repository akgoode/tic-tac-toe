'use strict';

const gameAPI = require('./api.js');
const gameStore = require('../gameStore.js');
const ui = require('./ui.js');

const onNewGame = function (event) {
  event.preventDefault();
  gameAPI.createGame()
    .then((response) => {
      gameStore.game = response.game;
      console.log(gameStore.game);
      return gameStore.game;
    })
    .then(ui.createSuccess)
    ;
  //console.log(newGame.responseJSON.game + '');
  //console.log(newGame.responseJSON.game);
};

const addHandlers = function () {
  $('#creategame').on('click', onNewGame);
};

module.exports = {
  addHandlers,
};
