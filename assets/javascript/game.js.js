
// create an array of words
var words = [
    "javascript",
    "donkey",
    "amazing",
    "pancake"
    
   ];
    // pick a random word
   var word = words[Math.floor(Math.random() * words.length)];
   //set up the answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
   }
    var remainingLetters = word.length;
    //the game loop
    while (remainingLetters > 0) {
    //show the player their progress
    alert(answerArray.join(" "));
   //get a guess from the player
   var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        //Exit the game
    break;
    } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
   } else {
   // Update the game state with the guess
   }
   for (var j = 0; j < word.length; j++) {
   if (word[j] === guess) {
    answerArray[j] = guess;
   remainingLetters--;
    }
   }
   // End the game
   }
   //show the answer and congratulate the player
   alert(answerArray.join(" "));
   alert("Good job! The answer was " + word);
    console.log("answerArray");
    