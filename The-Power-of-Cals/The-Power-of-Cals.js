//declare variable
const introBtn = document.getElementById("intro");
const modal = document.getElementById("modal");
const inputPlayer = document.getElementById("playername");

//set the introduction page
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
document.getElementById("start").disabled = true;

//collect player name reflect to welcome speech
function getValue() {
  let int = inputPlayer.value;
  document.getElementById("start").disabled = false;
  document.getElementById("words").style.display = "none";
  document.getElementById("wel").style.display = "grid";
  document.getElementById("welcome").innerText = `Hello ${int} Welcome!!!
  Please click start button to enjoy the game!`;
}
