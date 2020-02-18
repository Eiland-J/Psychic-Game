//listing variables... Matching with HTML ID for variables
let wins = document.getElementById("wins")
let losses = document.getElementById("losses")
let myGuess = document.getElementById("your-guess")
let cGuess = document.getElementById("computer-guess")
let guesses = document.getElementById("guesses")
let choices = document.getElementById("choices")

// array of the alphabet 26 elements
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Holds user inputs in an array
var yourChoices = [];

//variables for guesses, wins, losses
let guessesNum = 10;
let winsNum = 0;
let lossNum = 0;


//function for when user chooses a letter
document.onkeyup = (function (event) {

    //taking yourChoices empty array and adding user input
    yourChoices.push(event.key);
    //connecting and wrtting with "innerHTML" users input/key pressed
    choices.innerHTML = yourChoices;
  
    //Conditions on if a key is pressed 
    if (event.keyCode ) {
      var mGuess = event.key;
      //Converts all letters to lowercase when pushed
      myGuess.innerHTML = mGuess.toLowerCase();
  
       //checking if user key is a valid input (must be a letter)
       var isValid = alphabet.includes(mGuess);
  
      //chooses random number 0-26 or "A-Z"
      let randomNum = Math.floor(Math.random() * 26)
  
      //computer chooses whatever number is picked from randomNum array
      var comGuess = alphabet[randomNum]
      cGuess.innerHTML = comGuess
  
      //if user chooses correctly, win counter ++
      if (mGuess === comGuess) {
        winsNum++
        wins.innerHTML = winsNum
      }
      //if user key is invalid gives an alert
      else if( isValid === false) {
        alert("Please choose a letter!!! \n Invalid Entry!");
      }
      else {
         //if user chooses incorrectly, losses go up ++
        lossNum ++
        losses.innerHTML = lossNum
        //amount of guesses go down by one
        guessesNum --
        guesses.innerHTML = guessesNum;
      }
    }
  
    //Tells user the game is over suggets refreshing
    if (guessesNum == 0) {
    alert("GAME OVER!!! \n Refresh Page to start over!")
    } 
  })
  