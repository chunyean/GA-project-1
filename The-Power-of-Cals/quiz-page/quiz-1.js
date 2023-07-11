const uName = localStorage.getItem("player1");

console.log(uName);

document.getElementById("display").style.display = "none";

document.getElementById("button").disabled = true;

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

//generate random number(0, 9) for left box
const num1 = getRandomNum(10);
const ques1 = document.getElementById("ques1");
ques1.innerText = num1;

//generate random number (0, 9) for right box
const num2 = getRandomNum(10);
const ques2 = document.getElementById("ques2");
ques2.innerText = num2;

//function to generate an array with 4 random answer plus correct answer
function randomUniqueNum(range, outputCount) {
  let arr = [];
  for (let i = 0; i < range; i++) {
    arr.push(i);
  }

  let result = [];

  for (let i = 1; i <= outputCount; i++) {
    const random = Math.floor(Math.random() * (range - i));
    result.push(arr[random]);
    arr[random] = arr[range - 1 - i];
  }
  return result;
}

function checkNum(array) {
  const idx = Math.floor(Math.random() * array.length);
  if (!array.includes(answer)) {
    array.splice(idx, 1, answer);
  }
  return array;
}

// function to place answer into random box
function answerBox(boxAns) {
  for (let j = 0; j <= 3; j++) {
    boxAns[j].innerText = ranAns[j];
  }
}

// get correct answer
const answer = num1 + num2;
const correctAnswer = document.getElementsByClassName("ans");

//set all the answer into boxes
const ranAns = checkNum(randomUniqueNum(19, 4));
answerBox(correctAnswer);

//assign every answer box with event listener
for (let i = 0; i < correctAnswer.length; i++) {
  correctAnswer[i].addEventListener("click", checkAns);
}

// set timer for the game
let time;

function countdown(number) {
  time = setInterval(function () {
    if (number > 0) {
      document.getElementById("timer").innerText = number + "s";
      number -= 1;
    } else if (number <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerText = "Time's Up!";
      document.getElementById("answer").style.display = "none";
      document.getElementById("display").style.display = "grid";
    }
  }, 1000);
}

countdown(10);

// function to calculate generate total score.
let totalScore = 0;
let point = 20;
let totalPoint = 0;

function collectScore(number) {
  totalScore = number + totalScore;
  return totalScore;
}

//event listener function
function checkAns(event) {
  const clicked = event.target;
  if (clicked.innerText != answer) {
    const current = clicked.innerText;
    clicked.innerText = "Wrong!";
    setTimeout(() => (clicked.innerText = current), 300);
  } else {
    clearInterval(time);
    const current = clicked.innerText;
    clicked.innerText = "Bingo!";
    setTimeout(() => (clicked.innerText = current), 1000);

    document.getElementById("button").disabled = false;

    totalPoint += point;

    document.getElementById("point").innerText = totalPoint;

    for (let i = 0; i < correctAnswer.length; i++) {
      correctAnswer[i].removeEventListener("click", checkAns);
    }

    return;
  }
}

class playerdetail {
  constructor(username, score) {
    (this.username = username), (this.score = score);
  }
}

const player1 = new playerdetail(uName, totalScore);

console.log(player1);

localStorage.setItem("quiz1", totalScore);
document.getElementById("final").innerText = totalScore;

collectScore(point);

localStorage.setItem("quiz1Total", totalScore);
localStorage.setItem("pName", uName);
