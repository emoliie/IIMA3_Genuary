// GENUARY 18 - Chemin inattendu basé sur une règle simple
// Marche aléatoire avec règle : tourner à gauche si pair, à droite si impair

let x, y;
let direction = 0; // 0=droite, 1=bas, 2=gauche, 3=haut
let step = 5;
let count = 0;

let COULEUR = "#00b4d8";
let FOND = "#03045e";

function setup() {
  createCanvas(500, 500);
  background(FOND);
  stroke(COULEUR);
  strokeWeight(1);

  x = width / 2;
  y = height / 2;
}

function draw() {
  for (let i = 0; i < 10; i++) {
    let prevX = x;
    let prevY = y;

    // Avancer dans la direction actuelle
    if (direction === 0) x += step;
    else if (direction === 1) y += step;
    else if (direction === 2) x -= step;
    else y -= step;

    // Dessiner le segment
    let alpha = map(count, 0, 5000, 255, 50);
    stroke(0, 180, 216, alpha);
    line(prevX, prevY, x, y);

    // Règle simple : tourner selon la parité du compteur
    if (count % 2 === 0) {
      direction = (direction + 1) % 4; // Tourner à droite
    } else {
      direction = (direction + 3) % 4; // Tourner à gauche
    }

    // Rebondir sur les bords
    if (x < 0 || x > width) {
      x = constrain(x, 0, width);
      direction = (direction + 2) % 4;
    }
    if (y < 0 || y > height) {
      y = constrain(y, 0, height);
      direction = (direction + 2) % 4;
    }

    count++;
  }

  if (count > 10000) noLoop();
}
