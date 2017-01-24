'use strict';

let board = document.getElementById('gameboard');

//let Player = require('./player.js');

const Player = function (name, index) {
  this.name = name;
  this.playerNumber = index;
  if (index === 1) {
    this.piece = "X";
  } else {
    this.piece = "O";
  }
};

// constructor:  Takes array of players and creates an empty game board.

const Board = function (player1, player2) {
  this.spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  //this.spaces = ["[]", "[]", "[]", "[]", "[]", "[]", "[]", "[]", "[]"];
  // this.spaces = ["_", "_", "_", "_", "_", "_", "_", "_", "_", ];
  this.players = [player1, player2];
  this.turn = 1;
};

Board.prototype.createBoard = function(board) {
  for (let i = 0; i < this.spaces.length; i++) {
	let newSpace = document.createElement('div');
	newSpace.className = 'space';
  newSpace.setAttribute("id", i);
	newSpace.addEventListener('click', this.makeMove);
  newSpace.appendChild(document.createElement('h1'));
	board.appendChild(newSpace);
  }
};


// Attempts to place a game piece in a designated spot on the board

Board.prototype.makeMove = function (player, move) {
  console.log("Player " + player.playerNumber + " made move " + move);
  if (this.isValidMove(move)) {
    //this.spaces[move] = player.piece;
    if(this.turn % 2 === 1) {
      this.spaces[move] = 'X';
    } else {
      this.spaces[move] = 'O';
    }
    this.paintBoard(player);
    if (this.win(player)) {
      console.log("Player " + player.playerNumber + " wins!");
    }
  } else {
    console.log("That is not a valid move!");
  }
};

Board.prototype.paintBoard = function (player) {
  for (let i = 0; i < this.spaces.length; i++) {
    document.getElementById(i + '').text = player.piece;
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

Board.prototype.win = function (player) {
  return this.isHorizontalWin(player) || this.isVerticalWin(player) || this.isDiagonalWin(player);
};

Board.prototype.isHorizontalWin = function(player) {
  return (this.spaces[0] === player.piece && this.spaces[1] === player.piece && this.spaces[2] === player.piece) ||
  (this.spaces[3] === player.piece && this.spaces[4] === player.piece && this.spaces[5] === player.piece) ||
  (this.spaces[6] === player.piece && this.spaces[7] === player.piece && this.spaces[8] === player.piece);
};

Board.prototype.isVerticalWin = function(player) {
  return (this.spaces[0] === player.piece && this.spaces[3] === player.piece && this.spaces[6] === player.piece) ||
  (this.spaces[1] === player.piece && this.spaces[4] === player.piece && this.spaces[7] === player.piece) ||
  (this.spaces[2] === player.piece && this.spaces[5] === player.piece && this.spaces[8] === player.piece);
};

Board.prototype.isDiagonalWin = function (player) {
  return (this.spaces[0] === player.piece && this.spaces[4] === player.piece && this.spaces[8] === player.piece) ||
  (this.spaces[6] === player.piece && this.spaces[4] === player.piece && this.spaces[2] === player.piece);
};

// Prints out a board to the console

Board.prototype.printBoard = function () {
  for (let i = 0; i < 9; i += 3) {
    console.log(this.spaces[i + 0] + ' ' + this.spaces[i + 1] + ' ' + this.spaces[i + 2]);
  }
};



// testing code below

const player1 = new Player("Andy", 1);
const player2 = new Player("Betsy", 2);
const board1 = new Board(player1, player2);
board1.createBoard(board);


// Horizontal win test

// board1.printBoard();
// board1.makeMove(player1, 4);
// board1.printBoard();
// board1.makeMove(player2, 7);
// board1.printBoard();
// board1.makeMove(player1, 3);
// board1.printBoard();
// board1.makeMove(player2, 6);
// board1.printBoard();
// board1.makeMove(player1, 5);

// Vertical win test

// board1.printBoard();
// board1.makeMove(player1, 4);
// board1.printBoard();
// board1.makeMove(player2, 6);
// board1.printBoard();
// board1.makeMove(player1, 2);
// board1.printBoard();
// board1.makeMove(player2, 3);
// board1.printBoard();
// board1.makeMove(player1, 1);
// board1.printBoard();
// board1.makeMove(player2, 0);

// Diagonal Win Test

board1.printBoard();
board1.makeMove(player1, 4);
board1.printBoard();
board1.makeMove(player2, 7);
board1.printBoard();
board1.makeMove(player1, 2);
board1.printBoard();
board1.makeMove(player2, 8);
board1.printBoard();
board1.makeMove(player1, 6);
board1.printBoard();

module.exports = {
  Board,
};
