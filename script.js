function checkGuess() {
  let userGuess = Number(document.getElementById("guessInput").value);
  let message = document.getElementById("message");
  let hint = document.getElementById("hint");

  // Generate NEW random number every time
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  // Validation
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.innerText = "⚠️ Enter a number between 1 and 100";
    hint.innerText = "";
    hint.className = "";
    return;
  }

  // Show comparison
  message.innerText = "You: " + userGuess + " | System: " + randomNumber;

  // Reset color
  hint.className = "";

  // Hint logic
  if (userGuess > randomNumber) {
    hint.innerText = "📈 Too High";
    hint.classList.add("high");
  } else if (userGuess < randomNumber) {
    hint.innerText = "📉 Too Low";
    hint.classList.add("low");
  } else {
    hint.innerText = "🎉 Correct!";
    hint.classList.add("correct");
  }
}

function restartGame() {
  document.getElementById("message").innerText = "";
  document.getElementById("hint").innerText = "";
  document.getElementById("hint").className = "";
  document.getElementById("guessInput").value = "";
}