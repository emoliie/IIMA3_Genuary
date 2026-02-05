// GENUARY 02 - Les douze principes de l'animation
// Principe illustré : Squash & Stretch (écrasement et étirement)
// Une balle qui rebondit avec déformation

let y;
let vy = 0;
let gravity = 0.5;
let bounce = -0.8;
let squash = 1;

let COULEUR = "#e63946";
let FOND = "#f1faee";

function setup() {
  createCanvas(500, 500);
  y = 100;
}

function draw() {
  background(FOND);

  // Physique
  vy += gravity;
  y += vy;

  // Rebond au sol
  if (y > height - 50) {
    y = height - 50;
    vy *= bounce;
    squash = 1.5; // Écrasement au contact
  }

  // Retour progressif à la forme normale
  squash = lerp(squash, 1, 0.1);

  // Étirement en vol (selon la vitesse)
  let stretch = 1 + abs(vy) * 0.02;

  // Dessiner la balle
  noStroke();
  fill(COULEUR);

  push();
  translate(width / 2, y);

  // Appliquer squash ou stretch
  if (squash > 1.1) {
    scale(squash, 1 / squash); // Écrasé
  } else {
    scale(1 / stretch, stretch); // Étiré
  }

  ellipse(0, 0, 80, 80);
  pop();

  // Ombre au sol
  fill(0, 30);
  let shadowSize = map(y, 100, height - 50, 20, 80);
  ellipse(width / 2, height - 20, shadowSize, 10);
}
