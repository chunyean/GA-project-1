//set the introduction page
const introBtn = document.getElementById("intro");

const modal = document.getElementById("modal");

introBtn.onclick = function () {
  modal.style.display = "block";
};

modal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//deactivate start button
//hide the div classs "wel"
document.getElementById("start").disabled = true;
document.getElementById("wel").style.display = "none";

//collect player name reflect to welcome speech
const inputPlayer = document.getElementById("playername");
function getValue() {
  let int = inputPlayer.value;
  document.getElementById("start").disabled = false;
  document.getElementById("words").style.display = "none";
  document.getElementById("wel").style.display = "grid";
  document.getElementById("welcome").innerText = `Hello ${int} Welcome!!!
  Please click start button to enjoy the game!`;
  localStorage.setItem("player1", int);
  localStorage.setItem("player2", int);
  localStorage.setItem("player3", int);
}

const a = localStorage.getItem("player1");

const b = localStorage.getItem("player2");
const c = localStorage.getItem("player3");

const array = [a];

if (b != array[0]) {
  array.push(a);
}
if (c != array[0]) {
  array.push(c);
}

console.log(array);
