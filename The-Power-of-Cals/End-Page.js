// show out the final score 
let finalScore = Number(localStorage.getItem("quiz5Total"));

document.getElementById("total").innerText = finalScore

const playerHistory = JSON.parse(localStorage.getItem("playerHistory"));

function updateScore(totalScore) {
  let last = playerHistory.pop();
  last.score = totalScore;
  playerHistory.push(last);
  localStorage.setItem("playerHistory", JSON.stringify(playerHistory));
}

updateScore(finalScore)
