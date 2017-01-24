'use strict';

const success = (data) => {
  if (data) {console.log(data);}
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
};
