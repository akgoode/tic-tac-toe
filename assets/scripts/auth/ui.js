'use strict';

const signInSuccess = (data) => {
  if (data) {
    console.log(data);
  }
  $('#signInSubmit').hide();
  $('#userSignIn').hide();
  $('#userChangePassword').removeClass("hide");
  $('#userSignOut').removeClass("hide");
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  signInSuccess,
};
