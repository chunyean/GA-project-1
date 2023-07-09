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

//function to generate an array with 3 random answer plus correct answer
function randomUniqueNum(range, outputCount) {
  let arr = [];
  for (let i = 1; i <= range; i++) {
    arr.push(i);
  }
  const index = arr.indexOf(answer);
  arr.splice(index, 1);

  let result = [];

  for (let i = 1; i <= outputCount; i++) {
    const random = Math.floor(Math.random() * (range - 1 - i));
    result.push(arr[random]);
    arr[random] = arr[range - 1 - i];
  }

  const idx = Math.floor(Math.random() * (result.length + 1));
  result.splice(idx, 0, answer);
  return result;
}

// function to put answer into random box
function answerBox(boxAns) {
  for (let j = 0; j <= 3; j++) {
    boxAns[j].innerText = ranAns[j];
  }
}

// get correct answer
const answer = num1 + num2;
const correctAnswer = document.getElementsByClassName("ans");

//set all the answer into boxes
const ranAns = randomUniqueNum(19, 3);
answerBox(correctAnswer);
