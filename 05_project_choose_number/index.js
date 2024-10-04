// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const lowORhi = document.querySelector(".loworhi");
const startOver = document.querySelector(".result-content");

// Create paragraph for 'New Game' button
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playgame = true;

// User submits a guess
if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// Function to validate guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage("Please enter a valid number.");
  } else if (guess < 1) {
    displayMessage("Number should be greater than or equal to 1.");
  } else if (guess > 100) {
    displayMessage("Number should be less than or equal to 100.");
  } else {
    prevGuess.push(guess); // Push the value into prevGuess array
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over! The random number was: ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Function to check if the guess is correct
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulations! You guessed the right number.`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage("The number is high.");
  } else if (guess < randomNumber) {
    displayMessage("The number is low.");
  }
}

// Function to display guesses
function displayGuess(guess) {
  userInput.value = ''; // Clear the input field
  guessSlot.innerHTML += `${guess}, `; // Display guesses
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`; // Update remaining guesses
}

// Function to display messages
function displayMessage(message) {
  lowORhi.innerHTML = `<h2>${message}</h2>`;
}

// Function to end the game
function endGame() {
  userInput.value = ''; // Clear input
  userInput.setAttribute('disabled', ''); // Disable input
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
  startOver.appendChild(p);
  playgame = false; // Disable gameplay
  newGame(); // Allow user to start a new game
}

// Function to start a new game
function newGame() {
  const newGameButton = document.querySelector('#newgame');
  newGameButton.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = ''; // Clear guesses
    remaining.innerHTML = `${11 - numGuess}`; // Reset remaining guesses
    userInput.removeAttribute('disabled'); // Enable input
    startOver.removeChild(p); // Remove the 'Start New Game' button
    playgame = true; // Re-enable gameplay
  });
}
