let attempts = 0;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsText = document.getElementById("attempts");

  if (!userGuess) {
    message.textContent = "Please enter a number!";
    return;
  }

  // Generate random number EACH time
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  attempts++;
  attemptsText.textContent = "Attempts: " + attempts;

  if (userGuess === randomNumber) {
    message.textContent = `🎉 Exact Match! Both got ${randomNumber}`;
  } else {
    message.textContent = `❌ Not a match. You: ${userGuess}, System: ${randomNumber}`;
  }
}

function restartGame() {
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "Attempts: 0";
  document.getElementById("guessInput").value = "";
}