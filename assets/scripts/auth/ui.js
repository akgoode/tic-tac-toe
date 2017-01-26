'use strict';

const player = require('../game/player.js');
const board = require('../game/board.js');

const signInSuccess = (data) => {
  if (data) {
    console.log(data);
  }
  $('#signInSubmit').hide();
  $('#userSignIn').hide();
  $('#userChangePassword').removeClass("hide");
  $('#userSignOut').removeClass("hide");
  $('#statusbar').text('Begin New Game!');
  //player.playerInit();
  $('.signInForm').val('');
};

const signUpSuccess = () => {
  $('#statusbar').text('Please Sign in!');
  $('.signUpForm').val('');
};

const changePasswordSuccess = () => {
  $('#statusbar').text('Password successfully changed!');
  $('.changePasswordForm').val('');
};

const signOutSuccess = () => {
  $('#userSignIn').show();
  $('#userChangePassword').hide();
  $('#userSignOut').hide();
  $('#statusbar').text('Successfully logged out!');
  $('#signInSubmit').show();
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
