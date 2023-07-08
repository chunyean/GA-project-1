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

//generate answer
const answer = num1 + num2;
const correctAnswer = document.getElementsByClassName("ans");

console.log(correctAnswer);
for (i = 0; i < correctAnswer.length; i++) {
  let halo = correctAnswer[i].innerText;
}

halo = answer;
