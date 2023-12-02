// main.js

import challenges from './config.js';

const cardContainer = document.getElementById("card-container");
const shuffleBtn = document.getElementById("shuffle-btn");
const drawBtn = document.getElementById("draw-btn");
const saveBtn = document.getElementById("save-btn");

let shuffledCards = [];

function initialize() {
  shuffledCards = shuffle([...challenges]);
  addEventListeners();
  resetGame();
}

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
}

function drawCard() {
  if (shuffledCards.length === 0) {
    cardContainer.innerHTML = "Se han acabado las cartas.";
    drawBtn.disabled = true;
    return;
  }

  let card = shuffledCards.pop();
  cardContainer.innerHTML = card;
}

function saveCards() {
  if (shuffledCards.length === challenges.length) {
    alert("¡No has sacado ninguna carta!");
    return;
  }

  localStorage.setItem("drawnCards", JSON.stringify(shuffledCards));
  alert(`¡Se han guardado ${challenges.length - shuffledCards.length} cartas!`);
  resetGame();
}

function resetGame() {
  shuffledCards = shuffle([...challenges]);
  drawBtn.disabled = false;
  cardContainer.innerHTML = "Presiona el botón 'Sacar carta' para empezar.";
}

function addEventListeners() {
  shuffleBtn.addEventListener("click", resetGame);
  drawBtn.addEventListener("click", drawCard);
  saveBtn.addEventListener("click", saveCards);
}

initialize();
