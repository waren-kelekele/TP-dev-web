"use strict";

console.log("bonjour");
const $startBtn = document.getElementById("start-btn");
const $guessBtn = document.getElementById("guess-btn");
const $cowBtn = document.getElementById("cow-btn");
const $output = document.getElementById("output");
const $numUsr = document.getElementById("num-usr");
const $maxUsr = document.getElementById("max-usr");

let secretNumber = 0;
let nbGuesses = 0;
let maxGuesses = 0;

function launchGame(_evt) {
  console.log("Fonction launchGame...")
  $guessBtn.removeAttribute("disabled");
  secretNumber = Math.floor(Math.random() * $maxUsr.value) + 1;
  maxGuesses = Math.ceil(Math.log($maxUsr.value)) + 1;
  const maxUsrValue = parseInt($maxUsr.value);
  const numUsrValue = parseInt($numUsr.value);
  if (numUsrValue > maxUsrValue) {
    $output.innerHTML = '<p>Votre nombre est incorrect par rapport au nombre max.</p>';
  }
   $guessBtn.addEventListener('click', function () {
      // Comparez le numéro deviné avec le nombre secret
      if (numUsrValue === secretNumber) {
        $output.innerHTML = '<p>Bravo, vous avez deviné le nombre !</p>';
        $guessBtn.setAttribute('disabled', 'disabled');
      } else {
        $output.innerHTML = '<p>Essaie à nouveau.</p>';
      }
    });
  }

$startBtn.addEventListener('click', launchGame);

// Ajoutez un gestionnaire d'événements à l'élément num-usr pour la touche Entrée
$numUsr.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    launchGame();
  }
});


$startBtn.addEventListener("click", launchGame);



function addCow(evt) {
  console.debug(evt.x, evt.y);
  let vacheImage = document.createElement("img");
  let posScrollBarY = window.scrollY;
  vacheImage.classList.add('cow');
  vacheImage.style.position = 'absolute';
  vacheImage.style.top = ((evt.clientY - posScrollBarY) - vacheImage.height / 2) + 'px';
  vacheImage.style.left = (evt.clientX - vacheImage.width / 2) + 'px';
  vacheImage.src = "https://upload.wikimedia.org/wikipedia/commons/3/30/Cowicon.svg";
  let hasardDeg = Math.random() * 360;
  vacheImage.style.transform = 'rotate(${hasardDeg}deg)';
  document.appendChild(vacheimage);
}

function toggleCow(_evt) {
  if (document.onmousedown instanceof Function) {
    document.onmousedown = null;
  } else {
    document.onmousedown = addCow;
  }
}
$cowBtn.addEventListener("click", toggleCow);

