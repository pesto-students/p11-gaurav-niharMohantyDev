function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guessCount = 0;
    
    while (guessCount < totalGuesses) {
      let userGuess = prompt(getPromptText(guessCount));
  
      // If the user presses Cancel, return 0
      if (userGuess === null) {
        return 0;
      }
  
      // If the user enters an empty string or a non-numeric value, give them another chance
      if (userGuess === "" || isNaN(userGuess)) {
        continue;
      }
  
      guessCount++;
  
      if (parseInt(userGuess) === numToGuess) {
        return guessCount;
      } else if (parseInt(userGuess) < numToGuess) {
        console.log(userGuess + " is too small. Guess a larger number.");
      } else {
        console.log(userGuess + " is too large. Guess a smaller number.");
      }
    }
  
    return 0; // User exceeded totalGuesses without guessing the correct number
  }
  
  function getPromptText(guessCount) {
    if (guessCount === 0) {
      return "Enter a number between 1 and 100.";
    } else {
      return "Please enter a number.";
    }
  }
  