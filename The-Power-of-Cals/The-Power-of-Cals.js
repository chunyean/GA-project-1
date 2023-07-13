//declare variable
const introBtn = document.getElementById("intro");
const modal = document.getElementById("modal");
const inputPlayer = document.getElementById("playername");
const submitBtn = document.getElementById("btn");
const showScoreBtn = document.getElementById("score");
const hideScoreBtn = document.getElementById("hide");
const tblUp = document.getElementById("tbl");
const playerHistory = JSON.parse(localStorage.getItem("playerHistory"));
const table = createTableFromObjects(playerHistory);

//deactivate start button
document.getElementById("start").disabled = true;

//function for this script
//1. show modal
function showModal() {
  modal.style.display = "block";
}

//2. hide modal
function closeModal() {
  modal.style.display = "none";
}

//3. collect player name reflect to welcome speech
function getValue() {
  let int = inputPlayer.value;
  document.getElementById("start").disabled = false;
  document.getElementById("words").style.display = "none";
  document.getElementById("wel").style.display = "grid";
  document.getElementById("welcome").innerText = `Hello ${int} Welcome!!!
  Please click start button to enjoy the game!`;
  storePlayerData(int);
}

//4. collect player name store into local storage
function storePlayerData(playerName) {
  const playerObject = { name: playerName, score: 0 };
  let storedData = localStorage.getItem("playerHistory");
  let playerHistory = [];
  if (storedData) {
    playerHistory = JSON.parse(localStorage.getItem("playerHistory"));
  }
  playerHistory.push(playerObject);

  localStorage.setItem("playerHistory", JSON.stringify(playerHistory));
}

// 5. create table for last three player
function createTableFromObjects(data) {
  const table = document.createElement("table");
  const hRow = document.createElement("tr");
  table.className = "tClass";

  const keys = Object.keys(data[0]);
  for (const key of keys) {
    const hCell = document.createElement("th");
    hCell.className = "tClass";
    hCell.textContent = key;
    hRow.appendChild(hCell);
  }
  table.appendChild(hRow);

  const newData = data.splice(-3);
  for (const obj of newData) {
    const dataRow = document.createElement("tr");
    dataRow.className = "tClass";
    for (const key of keys) {
      const dataCell = document.createElement("td");
      dataCell.className = "tClass";
      dataCell.textContent = obj[key];
      dataRow.appendChild(dataCell);
    }
    table.appendChild(dataRow);
  }

  return table;
}

//6. show score table
function showScoreTable() {
  tblUp.style.display = "block";
}

//7. hide score table
function hideScoreTable() {
  tblUp.style.display = "none";
}

//add eventlistener to each button
introBtn.addEventListener("click", showModal);
modal.addEventListener("click", closeModal);
submitBtn.addEventListener("click", getValue);
showScoreBtn.addEventListener("click", showScoreTable);
hideScoreBtn.addEventListener("click", hideScoreTable);

document.getElementById("tbl").appendChild(table);
