var wins = 0;
var losses = 0;
var guessesLeft = 9;

// var userGuess = function letter (){

//Possible letters that the computer can choose
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

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  //A random letter is chosen by the computer
  var computerLetter = alphabet[Math.floor(Math.random() * 25)];
  // var computerLetter = alphabet[0];

  var userLetter = event.key;
  console.log(computerLetter);

  //The user's choice is compared to the computer's and there are several outcomes
  // if (userLetter === computerLetter) {
  //   // wins++;
  //   document.getElementById("wins").innerHTML = wins++;
  //   document.getElementById("guessesSoFar").innerHTML = "";
  // } else {
  //   //     guessesLeft--;
  //   document.getElementById("guessesLeft").innerHTML = guessesLeft--;
  //   //     // document.getElementById("losses").innerHTML = losses;
  //   document.getElementById("guessesSoFar").innerHTML += userLetter + ", ";
  //   if ((guessesLeft = 0)) {
  //     document.getElementById("losses").innerHTML = losses++;
  //     document.getElementById("guessesSoFar").innerHTML = "";
  //   }
  // }
  // };

  // for (var guessesLeft = 9; guessesLeft > 0; guessesLeft--) {
  //   if (userLetter === computerLetter) {
  //     document.getElementById("wins").innerHTML = wins++;
  //     document.getElementById("guessesSoFar").innerHTML = "";
  //   } else {
  //     document.getElementById("guessesLeft").innerHTML = guessesLeft - 1;
  //     //     // document.getElementById("losses").innerHTML = losses;
  //     document.getElementById("guessesSoFar").innerHTML += userLetter + ", ";
  //   }
  // }

  //   if (userLetter === computerLetter) {
  //     // wins++;
  //     document.getElementById("wins").innerHTML = wins++;
  //     document.getElementById("guessesSoFar").innerHTML = "";
  //   } else if (userLetter != computerLetter) {
  //     //     guessesLeft--;
  //     if (guessesLeft > 0) {
  //       document.getElementById("guessesLeft").innerHTML = guessesLeft--;
  //       //     // document.getElementById("losses").innerHTML = losses;
  //       document.getElementById("guessesSoFar").innerHTML += userLetter + ", ";
  //     }
  //   } else if (userLetter != computerLetter) {
  //     if ((guessesLeft = 0)) {
  //       document.getElementById("losses").innerHTML = losses++;
  //       document.getElementById("guessesSoFar").innerHTML = "";
  //       guessesLeft = 9;
  //     }
  //   }
  // };

  if (userLetter === computerLetter) {
    // wins++;
    document.getElementById("wins").innerHTML = wins++;
    document.getElementById("guessesSoFar").innerHTML = "";
  } else {
    if (guessesLeft >= 1) {
      //     guessesLeft--;
      document.getElementById("guessesLeft").innerHTML = guessesLeft--;
      //     // document.getElementById("losses").innerHTML = losses;
      document.getElementById("guessesSoFar").innerHTML += userLetter + ", ";
    } else if (guessesLeft == 0) {
      document.getElementById("losses").innerHTML = losses++;
      document.getElementById("guessesSoFar").innerHTML = "";
      guessesLeft = 9;
    }
  }

  // if (userLetter === computerLetter) {
  //   // wins++;
  //   document.getElementById("wins").innerHTML = wins++;
  //   document.getElementById("guessesSoFar").innerHTML = "";
  // } else if (userLetter != computerLetter) {
  //   document.getElementById("guessesLeft").innerHTML = guessesLeft--;
  //   document.getElementById("guessesSoFar").innerHTML += userLetter + ", ";
  // }
};
// if (guessesLeft == 0) {
//   losses++;
//   document.getElementById("guessesSoFar").innerHTML = "";
// }
// } else if ((guessesLeft = 1 && userLetter != computerLetter)) {
//   document.getElementById("losses").innerHTML = losses++;
//   document.getElementById("guessesSoFar").innerHTML = "";
//   guessesLeft = 9;
// }

// if (userLetter === computerLetter) {
//   wins++;
//   document.getElementById("guessesSoFar").innerHTML = "";
// } else {
//   guessesLeft--;
//   document.getElementById("guessesLeft").innerHTML = guessesLeft;
//   document.getElementById("guessesSoFar").innerHTML += userLetter + ", ";
// }

// if (guesses === 0) {
//   losses++;
// }

// document.getElementById("wins").innerHTML = wins;
// document.getElementById("losses").innerHTML = losses;
// };
