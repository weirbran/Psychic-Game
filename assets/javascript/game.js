//user starts the game with 0 wins, 0 losses, and 9 guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//Array of all letters of the alphabet that the computer can choose
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//Computer randomly chooses a letter from the above array
var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

//Function used to get the computer to choose a new letter (every time this function is run)
var newComputerLetter = function() {
  alphabet[Math.floor(Math.random() * alphabet.length)];
};

//Used to 'restart' game, so user has 9 guesses, guesses far is blank, and new computer chooses new letter
function restart() {
  guessesLeft = 9;
  document.getElementById("guessesSoFar").innerHTML = "";
  newComputerLetter();
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  var userLetter = event.key;

  //This function is used to compare user's key press against every letter in the alphabet array
  //Why does 'checkLetter' and 'userLetter' show as grey when this is uncommented!!!
  //var checkLetter = function(userLetter){
  //  if checkLetter != alphabet.every(userLetter);
  //Essentially, this entire section should go inside of an if statement that says:
  //"if (onkeyup isn't equal to a letter), then return/don't run the function"

  //Guesses left decrements every time the user presses a key and the function is run
  guessesLeft--;

  //If guesses are greater than 0
  if (guessesLeft > 0) {
    //and the user has guessed correctly, then increase the win counter and restart the game
    if (userLetter === computerLetter) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      document.getElementById("guessesSoFar").innerHTML = "";
      restart();
      //otherwise, show how many guesses they have left and display what they've guessed so far
    } else document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("guessesSoFar").innerHTML += userLetter + ", ";
    computerLetter;
    //if the user has no more guesses left, then increase the loss counter and restart the game
  } else if (guessesLeft == 0) {
    losses++;
    document.getElementById("losses").innerHTML = losses;
    restart();
  }
};
