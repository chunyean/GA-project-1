document.getElementById("start").disabled = true;

document.getElementById("wel").style.display = "none";

const inputPlayer = document.getElementById("playername");

function getValue() {
  let int = inputPlayer.value;
  document.getElementById("start").disabled = false;
  document.getElementById("words").style.display = "none";
  document.getElementById("wel").style.display = "grid";
  document.getElementById("welcome").innerText = `Hello ${int} Welcome!!!`;
  document.getElementById(
    "guide"
  ).innerText = `Please click start button to enjoy the game!`;
}
