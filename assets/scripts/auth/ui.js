'use strict';

const board = require('../game/board.js');
const store = require('../store.js');

const signInSuccess = () => {
  $('#signInSubmit').addClass('hide');
  $('#userSignIn').addClass('hide');
  $('#userChangePassword').removeClass('hide');
  $('#userSignOut').removeClass('hide');
  $('#statusbar').text('Click "New Game" to play!');
  $('.signInForm').val('');
  $('#creategame').removeClass('hide');
  $('#showGames').removeClass('hide');
  $('#game-id').removeClass('hide');
  $('#getGame').removeClass('hide');
  $('#signInModal').modal('hide');
  $('#showUnfinished').removeClass('hide');
  $('.search-results').removeClass('hide');
};

const signUpSuccess = () => {
  $('#statusbar').text('Thanks for signing up!');
  $('.signUpForm').val('');
  $('#signUpModal').modal('hide');
};

const changePasswordSuccess = () => {
  $('#statusbar').text('Password successfully changed!');
  $('.changePasswordForm').val('');
  $('#changePasswordModal').modal('hide');
};

const signOutSuccess = () => {
  $('#userSignIn').removeClass('hide');
  $('#userChangePassword').addClass('hide');
  $('#userSignOut').addClass('hide');
  $('#signInSubmit').removeClass('hide');
  $('#creategame').addClass('hide');
  $('#showGames').addClass('hide');
  $('#game-id').addClass('hide');
  $('#getGame').addClass('hide');
  $('#showUnfinished').addClass('hide');
  board.endGame();
  $('#statusbar').text('Successfully logged out!');
  $('.searchdata').text('');
  $('#gameboard').css("border-color", '#92fd75');
  $('.search-results').addClass('hide');

};

const failure = () => {
  $('#statusbar').text('There was an error. Please try again.');
};

module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
