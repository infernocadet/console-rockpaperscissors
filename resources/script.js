const regex = /^[a-zA-Z]+$/;
const options = ["scissors", "rock", "paper"];
let humanScore = 0;
let computerScore = 0;

function checkString(string) {
  if (!regex.test(string)) {
    return false;
  }

  if (options.includes(string.toLowerCase())) {
    return true;
  }
  return false;
}

function getComputerChoice() {
  number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(flag) {
  if (flag) {
    choice = prompt("Not a valid answer. What do you pick?");
  } else {
    choice = prompt("What do you pick?");
  }
  if (!checkString(choice)) {
    return getHumanChoice((flag = true));
  }
  return choice.toLowerCase();
}

function humanWin(humanChoice, computerChoice) {
  console.log(`Nice! ${humanChoice} beats ${computerChoice}.`);
  humanScore += 1;
  return;
}

function humanLose(humanChoice, computerChoice) {
  console.log(`Oh no! ${humanChoice} loses against ${computerChoice}.`);
  computerScore += 1;
  return;
}

function tie(humanChoice, computerChoice) {
  console.log("It's a tie. Try again!");
  return;
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  console.log(
    `You chose ${humanChoice}. The computer chose ${computerChoice}.`
  );
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanWin(humanChoice, computerChoice);
    } else if (computerChoice === "paper") {
      humanLose(humanChoice, computerChoice);
    } else {
      tie();
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanWin(humanChoice, computerChoice);
    } else if (computerChoice === "rock") {
      humanLose(humanChoice, computerChoice);
    } else {
      tie();
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanWin(humanChoice, computerChoice);
    } else if (computerChoice === "scissors") {
      humanLose(humanChoice, computerChoice);
    } else {
      tie();
    }
  }
  console.log(
    `Current score is: Human: ${humanScore} | Computer: ${computerScore}`
  );
}

while (humanScore < 3 && computerScore < 3) {
  playRound();
}
if (humanScore > computerScore) {
  console.log("Congrats! You win!");
} else {
  console.log("Heartbreaking Defeat");
}
