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
    return "Rock";
  } else if (number === 1) {
    return "Paper";
  } else {
    return "Scissors";
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

console.log(getHumanChoice());
