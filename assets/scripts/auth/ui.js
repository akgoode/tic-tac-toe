'use strict';

const board = require('../game/board.js');

const signInSuccess = (data) => {
  if (data) {
    console.log(data);
  }
  $('#signInSubmit').addClass("hide");
  $('#userSignIn').addClass("hide");
  $('#userChangePassword').removeClass("hide");
  $('#userSignOut').removeClass("hide");
  $('#statusbar').text('Begin New Game!');
  //player.playerInit();
  $('.signInForm').val('');
  $('#creategame').removeClass("hide");
  $('#showGames').removeClass("hide");
  $('#game-id').removeClass("hide");
  $('#getGame').removeClass("hide");
  $('#signInModal').modal("hide");
};

const signUpSuccess = () => {
  $('#statusbar').text('Please Sign in!');
  $('.signUpForm').val('');
  $('#signUpModal').modal("hide");
};

const changePasswordSuccess = () => {
  $('#statusbar').text('Password successfully changed!');
  $('.changePasswordForm').val('');
  $('#changePasswordModal').modal("hide");
};

const signOutSuccess = () => {
  $('#userSignIn').removeClass("hide");
  $('#userChangePassword').addClass("hide");
  $('#userSignOut').addClass("hide");
  $('#statusbar').text('Successfully logged out!');
  $('#signInSubmit').removeClass("hide");
  $('#creategame').addClass("hide");
  $('#showGames').addClass("hide");
  $('#game-id').addClass("hide");
  $('#getGame').addClass("hide");
  board.endGame();
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
