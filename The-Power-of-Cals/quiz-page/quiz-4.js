//decalre variable
let time;
const second = 10;
let totalScore = Number(localStorage.getItem("quiz3Total"));
const point = 20;
let totalPoint = Number(localStorage.getItem("quiz3Total"));

//preset default
document.getElementById("button").disabled = true;
document.getElementById("point").innerText = totalScore;

//function of the whole script
//1. generate random number
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

// get correct answer
const answer = num1 + num2;
const correctAnswer = document.getElementsByClassName("ans");

//2. function to generate an array with 4 random answer number
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

//3. check correct answer is that inside the array. slot in array if don't have
function checkNum(array) {
  const idx = Math.floor(Math.random() * array.length);
  if (!array.includes(answer)) {
    array.splice(idx, 1, answer);
  }
  return array;
}

//use function 2 and 3 to generate 4 unique number include the correct answer
const ranAns = checkNum(randomUniqueNum(19, 4));

// 4. function to place answer into random aswer box
function answerBox(boxAns) {
  for (let j = 0; j <= 3; j++) {
    boxAns[j].innerText = ranAns[j];
  }
}

//assign all the answer to different box
answerBox(correctAnswer);

//5. function for countdown timer
function countdown(number) {
  time = setInterval(function () {
    if (number > 0) {
      //countdown fucntion start will display the number with second
      document.getElementById("timer").innerText = number + "s";
      number -= 1;
    } else if (number <= 0) {
      //countdown reeach to 0 will autostop the timer for countdown
      clearInterval(countdown);

      //action to do during time's up
      document.getElementById("timer").innerText = "Time's Up!";
      document.getElementById("answer").style.display = "none";
      document.getElementById("display").style.display = "grid";
      document.getElementById("final").innerText = totalScore;
    }
  }, 1000);
}

//call the timer function
countdown(second);

//6.function to calculate generate total score.
function collectScore(number) {
  totalScore = number + totalScore;
  return totalScore;
}

//assign every answer box with event listener
for (let i = 0; i < correctAnswer.length; i++) {
  correctAnswer[i].addEventListener("click", checkAns);
}

//event listener function
function checkAns(event) {
  const clicked = event.target;

  //if clicked answer is not right, will show out text with Wrong word and will show back the previous number
  if (clicked.innerText != answer) {
    const current = clicked.innerText;

    clicked.innerText = "Wrong!";

    setTimeout(() => (clicked.innerText = current), 300);
  } else {
    const current = clicked.innerText;

    //if clicked answer is correct, will show text with Bingo word and will show back the original number
    clicked.innerText = "Bingo!";
    setTimeout(() => (clicked.innerText = current), 1000);

    //stop the timer
    clearInterval(time);

    //generate score and display out
    totalPoint += point;

    document.getElementById("point").innerText = totalPoint;

    //remove all the event listener
    for (let i = 0; i < correctAnswer.length; i++) {
      correctAnswer[i].removeEventListener("click", checkAns);
    }

    //next quiz button will be activate
    document.getElementById("button").disabled = false;

    return;
  }
}

//generate the score
collectScore(point);

//passing score to another page
localStorage.setItem("quiz4Total", totalScore);
