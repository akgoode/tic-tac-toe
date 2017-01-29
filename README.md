Tic-Tac-Toe

By Andrew Goode

http://akgoode.github.io/tic-tac-toe

User Experience:
Upon page load, the user is presented with two options: Sign Up or Sign In.  The game will not work without being signed in so the first visit to the site the user must sign up and then sign in to play the game.  Upon sign-in, the user will have some more options in their control panel.  They can create a game, change their password, sign out, and check how many games they have won, and get the state of any particular game if they know the ID for that game.

When they create a new game, the user's account will be assigned to player_x in the game.  The first move in the game will start with player x, and will alternate for each consecutive turn.  The game will not allow people to click on spaces that already have moves in them, nor will it allow users to continue making moves after the game is complete.

1/21/17:  Started creating the game logic.  By the end of the day I was able to mimic a game in node by hardcoding in test moves.  The game could tell when there was a winning condition in the game board.  I had horizontal, diagonal, and vertical win cases completed by today.

1/24/17:  Inserted my game into the browser template.  This caused some errors due to a leftover script tag in my index.html file.  After deleting this, all errors were resolved and the code worked.  Started building the board via JQuery and adding handlers in a function in board.js.  By the end of the day, I could display the gameboard in the browser.

1/25/17:  Ironed out all the bugs with event handlers and linking the makeMove function to the divs on the screen.  By the end of the day I had a working game displayed in the browser, but did not have any server interaction.

1/26/17:  Started working on API interactions.  In the morning I got all of the signup/signin/changepassword/signout functionality working and displayed in the browser.  In the afternoon I worked on implementing the interaction with the game server to create games and update them on the server.

1/27/17:  Got all the API functions working.  Modified the UI to be functional if the user resizes the page and made space for the output of all the ajax requests.  Fine-tuned some UI elements and behavior depending on which buttons were clicked.  Removed comments and console.log statements and excess bloat on the files.  Fixed all grunt nag errors.

1/28/17:  Worked on styling the page to look like an old school 8 bit monochromatic game.  Added "get unfinished games" functionality.  Also added formatting so that the game would be easily playable on mobile.

1/29/17: I worked on the README and made some tweaks to the border behavior of game spaces and the gameboard.

Important things I learned:
- The importance of controlling 'this' in writing javascript and custom objects with prototype methods.  I learned about function.bind() to control this and I think that will be very helpful for me in the future.
- The importance of using the browser template and the different ways of linking code files together.
- How to parse the responses of ajax requests and use those in functions.  Also how to track the arguments through some ajax functions and the eventhandlers that call them.
