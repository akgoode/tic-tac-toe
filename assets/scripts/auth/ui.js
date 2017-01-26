'use strict';

const player = require('../game/player.js');

const signInSuccess = (data) => {
  if (data) {
    console.log(data);
  }
  $('#signInSubmit').hide();
  $('#userSignIn').hide();
  $('#userChangePassword').removeClass("hide");
  $('#userSignOut').removeClass("hide");
  $('#statusbar').text('Begin New Game!');
  player.playerInit();
};

const signUpSuccess = () => {
  $('#signUpSubmit').hide();
  $('#statusbar').text('Please Sign in!');
};

const changePasswordSuccess = () => {
  $('#statusbar').text('Password successfully changed!');
};

const signOutSuccess = () => {
  $('#userSignIn').show();
  $('#userChangePassword').hide();
  $('#statusbar').text('Successfully logged out!');

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
