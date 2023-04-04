const cards = [
  "Haz un gemido sexual o toma 5 shoots",
  "Haz un perreo o toma 4 shoots",
  "Dejate tocar una nalga por la persona de zapatos negros o toma 2 shoots",
  "Besa a la persona de la izquierda o toma 3 shots",
  "Cuenta tu fantasía sexual o toma 5 shots",
  "invita a alguien en la habitación o toma 2 shots",
  "Elige a alguien para que te de un masaje o toma 3 shots",
  "Haz una pregunta atrevida a alguien o toma 1 shot",
  "Haz una rima improvisada o toma 2 shots",
  "Haz un baile sexy o toma 4 shots",
  "Quitate una prenda o toma 3 shots",
  "Elige a alguien para que te haga cosquillas o toma 2 shots",
  "Besa a la persona de la derecha o toma 3 shots",
  "Haz una imitación de una celebridad o toma 1 shot",
  "Haz una declaración de amor a alguien en la habitación o toma 5 shots",
  "Elige a alguien para que le hagas un masaje en los pies o toma 4 shots",
  "Cuenta un secreto embarazoso o toma 2 shots",
  "Haz una foto sexy y compártela con alguien en la habitación o toma 3 shots",
  "Elige a alguien para que te haga un baile sensual o toma 2 shots",
  "Besa a alguien en la mejilla o toma 1 shot",
  "Elige a alguien para que te haga una pregunta atrevida o toma 2 shots",
  "Haz una impresión de tu jefe o toma 3 shots",
  "Cuenta una broma sucia o toma 2 shots",
  "Haz una llamada de broma a alguien o toma 4 shots",
  "Elige a alguien para que te haga una caricia en la cara o toma 1 shot",
  "Besa a alguien en la mano o toma 2 shots",
  "Elige a alguien para que te cante una canción de amor o toma 3 shots",
  "Haz una declaración atrevida a alguien en la habitación o toma 4 shots",
  "Cuenta una experiencia vergonzosa en el baño o toma 2 shots",
  "Elige a alguien para que te haga un baile del vientre o toma 5 shots",
  "Haz una imitación de un personaje famoso o toma 3 shots",
  "Besa a alguien en la frente o toma 1 shot",
  "Elige a alguien para que te haga cosquillas en las axilas o toma 2 shots",
  "Haz una foto sexy y compártela en las redes sociales o toma 4 shots",
  "Cuenta una fantasía erótica o toma 5 shots",
  "Elige a alguien para que te susurre algo al oído o toma 3 shots",
  "Haz una llamada de broma a un ex o toma 4 shots",
  "Besa a alguien en el cuello o toma 2 shots",
  "Elige a alguien para que te haga un masaje en la espalda o toma 3 shots",
  "Haz una imitación de un amigo o toma 2 shots",
  "Cuenta una experiencia vergonzosa en una cita o toma 4 shots",
  "Toma 3 shots y cuenta un secreto.",
"Elige a alguien para que baile contigo o ambos toman 2 shots.",
"Besa a la persona más cercana a ti en la frente.",
"Toma 2 shots y di algo que nunca harías. Si alguien ha hecho eso antes, toma 2 shots.",
"Elige a alguien para que haga una confesión o toma 3 shots.",
"Toma 2 shots y haz una broma.",
"Elige a alguien para que te haga una pregunta personal o toma 2 shots.",
"Baila una canción elegida por el grupo o toma 2 shots.",
"Elige a alguien para que haga una imitación o toma 2 shots.",
"Toma 3 shots y cuenta una historia sobre tu ex.",
"Elige a alguien para que baile contigo o ambos toman 2 shots.",
"Dale un abrazo a la persona más alta del grupo.",
"Toma 2 shots y di algo vergonzoso. Si nadie se ríe, toma 2 shots.",
"Elige a alguien para que haga una confesión o toma 3 shots.",
"Toma 2 shots y haz una imitación.",
"Elige a alguien para que te haga una pregunta personal o toma 2 shots"
];

const cardContainer = document.getElementById("card-container");
const shuffleBtn = document.getElementById("shuffle-btn");
const drawBtn = document.getElementById("draw-btn");
const saveBtn = document.getElementById("save-btn");

let shuffledCards = shuffle(cards);
let drawnCards = [];

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
  drawnCards.push(card);
  cardContainer.innerHTML = card;
}

function saveCards() {
  if (drawnCards.length === 0) {
      alert("¡No has sacado ninguna carta!");
      return;
  }

  localStorage.setItem("drawnCards", JSON.stringify(drawnCards));
  alert(`¡Se han guardado ${drawnCards.length} cartas!`);
}

shuffleBtn.addEventListener("click", function() {
  shuffledCards = shuffle(cards);
  drawnCards = [];
  drawBtn.disabled = false;
  cardContainer.innerHTML = "Presiona el botón 'Sacar carta' para empezar.";
});

drawBtn.addEventListener("click", drawCard);
saveBtn.addEventListener("click", saveCards);