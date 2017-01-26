'use strict';

const config = require('../config');
const store = require('../store');

const showGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const showGame = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const createGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const update = function (move, board) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + board.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      "game": {
        "cell": {
          "index": move,
          "value": board.nextPiece(),
        },
        "over": board.over,
      }
    },
  });
};

const watch = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id + '/watch',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

module.exports = {
  showGames,
  showGame,
  createGame,
  update,
  watch,
};
