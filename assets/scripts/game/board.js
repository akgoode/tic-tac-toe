'use strict';

// constructor:  Creates an empty game board.

const Board = function () {
  this.spaces = [];

  //this.spaces = ["[]", "[]", "[]", "[]", "[]", "[]", "[]", "[]", "[]"];

  // this.spaces = ["_", "_", "_", "_", "_", "_", "_", "_", "_", ];

  this.turn = 0;
};

function boardInit() {
  // let board = document.getElementById('gameboard');
  let board = document.getElementById("gameboard");
  const board1 = new Board();
  board1.createBoard(board);
}

Board.prototype.nextPiece = function () {
  if (this.turn % 2 === 1) {
    return 'X';
  } else {
    return 'O';
  }
};

Board.prototype.createBoard = function (gameboard) {
  this.spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  for (let i = 0; i < this.spaces.length; i++) {
    let newSpace = document.createElement('div');
    newSpace.className = 'space';
    newSpace.setAttribute('id', i);
    newSpace.addEventListener('click', this.makeMove);
    newSpace.appendChild(document.createElement('h1'));
    gameboard.appendChild(newSpace);
  }
};

Board.prototype.clearBoard = function () {

};

// Attempts to place a game piece in a designated spot on the board

Board.prototype.makeMove = function (event) {
  let move = event.target.id;
  if (this.isValidMove(move)) {
    this.turn++;
    console.log('Player ' + this.nextPiece() + ' made move ' + move);
    this.spaces[move] = this.nextPiece();
    this.paintBoard();
    if (this.win()) {
      console.log('Player ' + this.nextPiece() + ' wins!');

    } else if (this.turn === 9) {
      console.log('The game is a tie!');
    }

  } else {
    console.log('That is not a valid move!');
  }
};

Board.prototype.paintBoard = function () {
  for (let i = 0; i < this.spaces.length; i++) {
    document.getElementById(i + '').text = this.spaces[i] + '';
  }
};

// Checks to see if a move is valid
// A valid move will be in a spot that doesn't already have an X or an O
// An invalid move will be in a spot that already has an X or an O

Board.prototype.isValidMove = function (move) {
  if (this.spaces[move] !== move) {
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

// testing code below

// Horizontal win test

// board1.printBoard();
// board1.makeMove(4);
// board1.printBoard();
// board1.makeMove(7);
// board1.printBoard();
// board1.makeMove(3);
// board1.printBoard();
// board1.makeMove(6);
// board1.printBoard();
// board1.makeMove(5);

// Vertical win test

// board1.printBoard();
// board1.makeMove(4);
// board1.printBoard();
// board1.makeMove(6);
// board1.printBoard();
// board1.makeMove(2);
// board1.printBoard();
// board1.makeMove(3);
// board1.printBoard();
// board1.makeMove(1);
// board1.printBoard();
// board1.makeMove(0);

// Diagonal Win Test

// board1.printBoard();
// board1.makeMove(4);
// board1.printBoard();
// board1.makeMove(7);
// board1.printBoard();
// board1.makeMove(2);
// board1.printBoard();
// board1.makeMove(8);
// board1.printBoard();
// board1.makeMove(6);
// board1.printBoard();

module.exports = {
  boardInit,
};
