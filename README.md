Tic-Tac-Toe

By Andrew Goode

http://akgoode.github.io/tic-tac-toe

User Experience:
Upon page load, the user is presented with two options: Sign Up or Sign In.  The game will not work without being signed in so the first visit to the site the user must sign up and then sign in to play the game.  Upon sign-in, the user will have some more options in their control panel.  They can create a game, change their password, sign out, and check how many games they have won, and get the state of any particular game if they know the ID for that game.

When they create a new game, the user's account will be assigned to player_x in the game.  The first move in the game will start with player x, and will alternate for each consecutive turn.  The game will not allow people to click on spaces that already have moves in them, nor will it allow users to continue making moves after the game is complete.

When I first created my concept of the game, I laid out a process that would happen while a game was being played.
  - First, the game board is created.
  - The first player makes a move.  A move first checks to see if the location of the move is valid.
    - Invalid:
      - Game requests player to make another move.
      - State of board and player's turn remains unchanged.
    - Valid:
      - The position on the board that was clicked on displays the user's game piece.
      - Game checks if this move caused the user to win.
        - If win, it changes the way the board is displayed to the user.
        - Sets the attribute "over" of the game to true.
      - Game checks to see if the game was a tie.
        - If tie, displays that information to the user.  Does not declare victory.
      - If neither, the rest of the spaces on the board remain available for the next move.
  - The finished game board persists until the user presses start new game.

One of the things that I discovered really made a big difference to the user experience was small changes to the UI when the user interacted with the board.  Once the game was successfully implemented I went over the user experience many times and tweaked the code to add modifications to the screen for just about every action the user makes, from changes to the status bar to changes in the way the game board was displayed to hiding data input modals.

Technologies Used:
  - JQuery
    - To create the game board each time someone starts a new game.
    - To modify which buttons are available on the screen depending on the user's actions.
    - To erase the contents of the board when a game is over or when the user signs out.
  - Bootstrap
    - Create layout of HTML that was easily changeable depending on screen size
    - Predefined button styles
    - Predefined modal styles

User Stories:
- User creates an account, signs in, and plays a game
- User can return and view past games at a different time
- User can sign in to their account on different devices and play games which will be accessible on all other devices.

1/21/17:  Started creating the game logic.  By the end of the day I was able to mimic a game in node by hardcoding in test moves.  The game could tell when there was a winning condition in the game board.  I had horizontal, diagonal, and vertical win cases completed by today.

1/24/17:  Inserted my game into the browser template.  This caused some errors due to a leftover script tag in my index.html file.  After deleting this, all errors were resolved and the code worked.  Started building the board via JQuery and adding handlers in a function in board.js.  By the end of the day, I could display the gameboard in the browser.

1/25/17:  Ironed out all the bugs with event handlers and linking the makeMove function to the divs on the screen.  By the end of the day I had a working game displayed in the browser, but did not have any server interaction.

1/26/17:  Started working on API interactions.  In the morning I got all of the signup/signin/changepassword/signout functionality working and displayed in the browser.  In the afternoon I worked on implementing the interaction with the game server to create games and update them on the server.

1/27/17:  Got all the API functions working.  Modified the UI to be functional if the user resizes the page and made space for the output of all the ajax requests.  Fine-tuned some UI elements and behavior depending on which buttons were clicked.  Removed comments and console.log statements and excess bloat on the files.  Fixed all grunt nag errors.

1/28/17:  Worked on styling the page to look like an old school 8 bit monochromatic game.  Added "get unfinished games" functionality.  Also added formatting so that the game would be easily playable on mobile.

1/29/17: I worked on the README and made some tweaks to the border behavior of game spaces and the gameboard.

Links to wireframes:

http://imgur.com/gUSSwxH
http://imgur.com/2iReM4B

Important things I learned:
- The importance of controlling 'this' in writing javascript and custom objects with prototype methods.  I learned about function.bind() to control this and I think that will be very helpful for me in the future.
- The importance of using the browser template and the different ways of linking code files together.
- How to parse the responses of ajax requests and use those in functions.  Also how to track the arguments through some ajax functions and the eventhandlers that call them.
