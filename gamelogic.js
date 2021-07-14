function displayWordSoFar(word, guesses) {

  let output = "";
  /*loop over the word*/
  for (let i = 0; i < word.length; i++) {
    const includedLetter = word[i];
    /*if letter in word is guessed correctly add letter + space to output*/
    if (guesses.includes(includedLetter)) {
      output += includedLetter + " ";
    }
    /*if letter in word is guessed incorrectly add underscore + space to output*/
    if (!guesses.includes(includedLetter)) {
      output += "_ ";
    }
  }
return output;
}

function isGameWon(word, guesses) {
  // WRITE ME
  /*create an empty string which will be filled with the unique letters from the word*/
  const outcome = [];
  /*loop over the word, if the letter is not already in the string push it into the string*/
  for (let i = 0; i < word.length; i++) {
    if (!outcome.includes(word[i])) {
      outcome.push(word[i]);
    }
  }

    let rightGuesses = 0;
    /*loop over the guess*/
    /*if the guessed letter is included in the outcome count +1 on rightGuesses*/
    for (let i = 0; i < guesses.length; i++) {
      if (outcome.includes(guesses[i])) {
        rightGuesses += 1;
      }
    }
    /*if the rightGuesses is the same length as the length of outcome with unique letters return true otherwise return false*/
    if (rightGuesses == outcome.length) {
      return true;
    }
    else {
      return false;
    }
}

function isGameLost(word, guesses) {
  // WRITE ME
  let wrongGuesses = 0;
  /*loop over the guess*/
  /*if the guessed letter is not included in the word count +1 on wrongGuesses*/
  for (let i = 0; i < guesses.length; i++) {
    if (!word.includes(guesses[i])) {
      wrongGuesses += 1;
    }
  }
  /*if the wrongGuesses count is 7 or more return true otherwise return false*/
  if (wrongGuesses >= 7) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
}