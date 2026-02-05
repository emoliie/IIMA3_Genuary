// GENUARY 01 - Une couleur, une forme
// Une spirale carrée qui s'enroule vers le centre

// Une seule couleur
let COULEUR = "#1a1a2e";
let FOND = "#eae7dc";

function setup() {
  createCanvas(500, 500);
  background(FOND);
  stroke(COULEUR);
  strokeWeight(2);
  noFill();

  let x = width / 2;
  let y = height / 2;
  let longueur = 10;
  let increment = 8;

  beginShape();
  vertex(x, y);

  // Dessiner la spirale carrée
  for (let i = 0; i < 40; i++) {
    let direction = i % 4;

    if (direction === 0) x += longueur;
    else if (direction === 1) y -= longueur;
    else if (direction === 2) x -= longueur;
    else if (direction === 3) y += longueur;

    vertex(x, y);
    longueur += increment;
  }

  endShape();
}
