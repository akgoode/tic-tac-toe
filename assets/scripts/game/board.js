'use strict';

// constructor:  Creates an empty game board.

const Board = function (player_x) {
  //this.id = id;
  this.spaces = [];
  this.turn = 0;
  this.player_x = player_x;
  this.over = false;
};

Board.prototype.nextPiece = function () {
  if (this.turn % 2 === 1) {
    return 'X';
  } else {
    return 'O';
  }
};

Board.prototype.getSpace = function (index) {
  return this.spaces[index];
};

Board.prototype.paintBoard = function (move) {
  $('#text' + move).text(this.nextPiece());
};

const clearBoard = function () {
  let gameboard = $('#gameboard');
  this.spaces = [];
  this.turn = 0;
  $('.space').remove();
  createBoard(this, gameboard);
  $('#newgame').addClass("hide");
  $('#statusbar').text("");
};

// Attempts to place a game piece in a designated spot on the board

const makeMove = function (event) {
  event.preventDefault();
  let move = parseInt(event.target.id);
  if (this.isValidMove(move)) {
    this.turn++;
    $('#statusbar').text('Turn ' + this.turn + ': Player ' + this.nextPiece() + ' made move ' + move);
    this.spaces[move] = this.nextPiece();
    this.paintBoard(move);
    if (this.win()) {
      $('#statusbar').text('Player ' + this.nextPiece() + ' wins!');
      $('#newgame').removeClass("hide");
      this.over = true;
    } else if (this.turn === 9) {
      $('#statusbar').text('The game is a tie!');
      this.over = true;
    }

  } else {
    $('#statusbar').text('That is not a valid move!');
  }
};

// Checks to see if a move is valid
// A valid move will be in a spot that doesn't already have an X or an O
// An invalid move will be in a spot that already has an X or an O

Board.prototype.isValidMove = function (move) {
  if (this.getSpace(move) !== move) {
    return false;
  }

  return true;
};

// Checks to see if the board is in a winning state

Board.prototype.win = function () {
  let piece = this.nextPiece();
  return this.isHorizontalWin(piece) || this.isVerticalWin(piece) || this.isDiagonalWin(piece);
};

Board.prototype.isHorizontalWin = function (piece) {
  let win1 = this.spaces[0] === piece && this.spaces[1] === piece && this.spaces[2] === piece;
  let win2 = this.spaces[3] === piece && this.spaces[4] === piece && this.spaces[5] === piece;
  let win3 = this.spaces[6] === piece && this.spaces[7] === piece && this.spaces[8] === piece;
  return win1 || win2 || win3;
};

Board.prototype.isVerticalWin = function (piece) {
  let win1 = this.spaces[0] === piece && this.spaces[3] === piece && this.spaces[6] === piece;
  let win2 = this.spaces[1] === piece && this.spaces[4] === piece && this.spaces[7] === piece;
  let win3 = this.spaces[2] === piece && this.spaces[5] === piece && this.spaces[8] === piece;
  return win1 || win2 || win3;
};

Board.prototype.isDiagonalWin = function (piece) {
  let win1 = this.spaces[0] === piece && this.spaces[4] === piece && this.spaces[8] === piece;
  let win2 = this.spaces[6] === piece && this.spaces[4] === piece && this.spaces[2] === piece;
  return win1 || win2;
};

// Prints out a board to the console

Board.prototype.printBoard = function () {
  for (let i = 0; i < 9; i += 3) {
    console.log(this.spaces[i + 0] + ' ' + this.spaces[i + 1] + ' ' + this.spaces[i + 2]);
  }
};

const createBoard = function (board1, gameboard) {
  board1.spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  for (let i = 0; i < board1.spaces.length; i++) {
    gameboard.append('<div class="space" id="' + i + '"></div>');
    $('#' + i).append('<h1 id="text' + i + '"></h1>');
    const bindMakeMove = makeMove.bind(board1);
    $('#' + i).on('click', bindMakeMove);
  }
  const bindClearBoard = clearBoard.bind(board1);
  $('#newgame').on('click', bindClearBoard);
};

function boardInit(player) {
  let $board = $('#gameboard');
  const board1 = new Board(player);

  createBoard(board1, $board);
}

module.exports = {
  boardInit,
};
