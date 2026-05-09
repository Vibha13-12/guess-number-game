# 🎯 Guess The Number Game

A fun, interactive browser-based number guessing game built with vanilla HTML, CSS, and JavaScript. Players try to guess a randomly generated number between 1 and 100, receiving feedback after each attempt.

---

## 👥 Group Members

| Name | NetID |
|------|-------|
| Member 1 | qc8297 |
| Member 2 | Tx8214 |
| Member 3 | Kp6361 |

## 🔗 Repository

[https://github.com/Vibha13-12/guess-number-game](https://github.com/Vibha13-12/guess-number-game)

---

## 📌 Assignment Overview

This is a **Group Submission**.
- 📅 **Programming Language Selection Deadline:** January 31st
- **Assigned Language:** JavaScript

---

## 📊 Presentation Topics — JavaScript

---

### 1. 📦 Variables – Binding and Allocation

JavaScript provides three ways to declare variables:

| Keyword | Scope | Re-assignable | Re-declarable |
|---------|-------|---------------|---------------|
| `var`   | Function-scoped | ✅ Yes | ✅ Yes |
| `let`   | Block-scoped | ✅ Yes | ❌ No |
| `const` | Block-scoped | ❌ No | ❌ No |

**Binding** refers to associating a variable name with a value. In JavaScript, binding happens at runtime (dynamic binding).

**Allocation** is managed automatically by JavaScript's engine through a process called **memory management**:
- **Stack** – Stores primitive values (numbers, strings, booleans).
- **Heap** – Stores objects and functions (reference types).

```javascript
let playerName = "Alice";       // Allocated on stack (primitive)
const scores = [10, 20, 30];    // Allocated on heap (object/array)
var attempts = 0;               // Function-scoped variable
```

JavaScript also uses **hoisting** — `var` declarations are hoisted to the top of their scope, but `let` and `const` are not initialized until their line is reached.

---

### 2. ➕ Arithmetic Expression Evaluation

JavaScript supports all standard arithmetic operators and follows standard **operator precedence** (PEMDAS/BODMAS).

| Operator | Description       | Example          | Result |
|----------|-------------------|------------------|--------|
| `+`      | Addition          | `5 + 3`          | `8`    |
| `-`      | Subtraction       | `10 - 4`         | `6`    |
| `*`      | Multiplication    | `3 * 4`          | `12`   |
| `/`      | Division          | `10 / 2`         | `5`    |
| `%`      | Modulus           | `10 % 3`         | `1`    |
| `**`     | Exponentiation    | `2 ** 3`         | `8`    |
| `++`     | Increment         | `x++`            | x+1    |
| `--`     | Decrement         | `x--`            | x-1    |

**Expression Evaluation Example (used in this game):**
```javascript
// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Track attempts
let attempts = 0;
attempts++;   // Increment on each guess

// Check how far off the guess is
let difference = Math.abs(secretNumber - userGuess);
```

JavaScript evaluates expressions **left to right**, respecting operator precedence. Parentheses can be used to override default precedence.

---

### 3. 🔀 Selection Statements

JavaScript supports multiple types of selection (conditional) statements:

#### if / else if / else
```javascript
function checkGuess(userGuess, secretNumber) {
    if (userGuess === secretNumber) {
        return "🎉 Correct! You guessed it!";
    } else if (userGuess < secretNumber) {
        return "📈 Too low! Try higher.";
    } else {
        return "📉 Too high! Try lower.";
    }
}
```

#### switch Statement
```javascript
switch (difficulty) {
    case "easy":
        maxAttempts = 15;
        break;
    case "medium":
        maxAttempts = 10;
        break;
    case "hard":
        maxAttempts = 5;
        break;
    default:
        maxAttempts = 10;
}
```

#### Ternary Operator
```javascript
let message = (userGuess === secretNumber) ? "You win!" : "Keep trying!";
```

---

### 4. 🔧 Sub Programs (Functions)

JavaScript supports several types of sub programs (functions):

#### Regular Function Declaration
```javascript
function generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
```

#### Function Expression
```javascript
const checkGuess = function(guess) {
    return guess === secretNumber;
};
```

#### Arrow Function
```javascript
const getHint = (guess, secret) => {
    return guess < secret ? "Too Low!" : "Too High!";
};
```

#### Functions used in this project:
```javascript
// Checks the user's guess and provides feedback
function checkGuess() {
    let userGuess = parseInt(document.getElementById("guessInput").value);
    attempts++;
    document.getElementById("attempts").textContent = "Attempts: " + attempts;

    if (userGuess === secretNumber) {
        document.getElementById("message").textContent = "🎉 Correct!";
    } else if (userGuess < secretNumber) {
        document.getElementById("message").textContent = "📈 Too Low!";
    } else {
        document.getElementById("message").textContent = "📉 Too High!";
    }
}

// Resets the game state
function restartGame() {
    secretNumber = generateSecretNumber();
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "Attempts: 0";
    document.getElementById("guessInput").value = "";
}
```

---

### 5. 🧩 Object-Oriented Programming (OOP)

JavaScript supports OOP through **ES6 Classes**. It supports both **Encapsulation** and **Inheritance**.

#### Encapsulation
Encapsulation bundles data and methods together and restricts direct access to internal state.

```javascript
class Game {
    #secretNumber;   // Private field (ES2022)
    #attempts;

    constructor() {
        this.#secretNumber = Math.floor(Math.random() * 100) + 1;
        this.#attempts = 0;
    }

    guess(number) {
        this.#attempts++;
        if (number === this.#secretNumber) return "Correct!";
        return number < this.#secretNumber ? "Too Low!" : "Too High!";
    }

    getAttempts() {
        return this.#attempts;
    }
}

const game = new Game();
console.log(game.guess(50));       // "Too High!" or "Too Low!"
console.log(game.getAttempts());   // 1
// console.log(game.#secretNumber) // ❌ Error — private field
```

#### Inheritance
Inheritance allows a class to extend another class and reuse/override its behavior.

```javascript
class TimedGame extends Game {
    #timeLimit;

    constructor(timeLimit) {
        super();   // Calls parent Game constructor
        this.#timeLimit = timeLimit;
    }

    startTimer() {
        console.log(`You have ${this.#timeLimit} seconds to guess!`);
        setTimeout(() => {
            console.log("⏰ Time's up!");
        }, this.#timeLimit * 1000);
    }
}

const timedGame = new TimedGame(30);
timedGame.startTimer();
console.log(timedGame.guess(42));  // Inherited from Game
```

---

### 6. 🔍 Language Comparison: JavaScript vs Python

| Feature | JavaScript | Python |
|--------|------------|--------|
| **Typing** | Dynamic, weakly typed | Dynamic, strongly typed |
| **Variable Declaration** | `var`, `let`, `const` | No keyword needed (just assign) |
| **Syntax** | Curly braces `{}`, semicolons `;` | Indentation-based, no semicolons |
| **OOP** | Prototype-based + ES6 Classes | Class-based |
| **Private Fields** | `#fieldName` (ES2022) | `__fieldName` (convention) |
| **Functions** | `function`, arrow `=>` | `def` keyword |
| **Null value** | `null` and `undefined` | Only `None` |
| **Type Coercion** | Implicit (e.g., `"5" + 1 = "51"`) | Strict (throws TypeError) |
| **Primary Use** | Web (frontend + backend via Node.js) | Data science, scripting, backend |
| **Execution** | Browser / Node.js | Python interpreter |
| **Concurrency** | Event loop (async/await) | Threads, asyncio |

**Key Differences:**
- JavaScript runs natively in browsers; Python does not.
- Python is more readable with indentation-based structure, while JavaScript uses `{}` blocks.
- JavaScript has two "empty" values (`null` vs `undefined`); Python only has `None`.
- JavaScript loosely coerces types automatically, which can lead to unexpected results — Python does not.

---

## 📋 Project Description

The Guess The Number Game is a classic browser game where the computer randomly picks a secret number between **1 and 100**, and the player must guess it. After each guess, the game provides feedback to guide the player closer to the answer. The game also tracks the number of attempts taken.

---

## 🚀 Features

- Random number generation between 1 and 100
- Real-time feedback on each guess (too high / too low / correct)
- Attempt counter to track how many guesses it takes
- Restart button to reset and play again
- Clean and simple user interface

---

## 🛠️ Technologies Used

- **HTML** – Page structure and layout
- **CSS** – Styling and visual design
- **JavaScript** – Game logic, DOM manipulation, and interactivity

---

## 📁 File Structure

```
guess-number-game/
├── index.html    # Main HTML file (game UI)
├── style.css     # Stylesheet
└── script.js     # Game logic
```

---

## ▶️ How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Vibha13-12/guess-number-game.git
   ```
2. Navigate into the project folder:
   ```bash
   cd guess-number-game
   ```
3. Open `index.html` in your browser — no server or installation required.

---

## 🎮 How to Play

1. The game randomly selects a number between **1 and 100**.
2. Type your guess into the input field and click **Submit**.
3. The game will tell you if your guess is too high, too low, or correct.
4. Keep guessing until you find the right number!
5. Click **Restart** at any time to start a new game.

---

## 📝 Notes

- No external libraries or frameworks are used — pure vanilla web technologies only.
- The game runs entirely in the browser with no backend required.rnal libraries or frameworks are used — pure vanilla web technologies only.
- The game runs entirely in the browser with no backend required.
