Tic-Tac-Toe

By Andrew Goode

http://akgoode.github.io/tic-tac-toe


1/21/17:  Started creating the game logic.  By the end of the day I was able to mimic a game in node by hardcoding in test moves.  The game could tell when there was a winning condition in the game board.  I had horizontal, diagonal, and vertical win cases completed by today.

1/24/17:  Inserted my game into the browser template.  This caused some errors due to a leftover <script> tag in my index.html file.  After deleting this, all errors were resolved and the code worked.  Started building the board via JQuery and adding handlers in a function in board.js.  By the end of the day, I could display the gameboard in the browser.

1/25/17:  Ironed out all the bugs with event handlers and linking the makeMove function to the divs on the screen.  By the end of the day I had a working game displayed in the browser, but did not have any server interaction.

1/26/17:  Started working on API interactions.  In the morning I got all of the signup/signin/changepassword/signout functionality working and displayed in the browser.  In the afternoon I worked on implementing the interaction with the game server to create games and update them on the server.

1/27/17:  Got all the API functions working.  Modified the UI to be functional if the user resizes the page and made space for the output of all the ajax requests.  Fine-tuned some UI elements and behavior depending on which buttons were clicked.  Removed comments and console.log statements and excess bloat on the files.  Fixed all grunt nag errors.
