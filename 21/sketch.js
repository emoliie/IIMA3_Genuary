// GENUARY 21 - Style Bauhaus
// Affiche géométrique inspirée du Bauhaus

let ROUGE = "#be3a2e";
let JAUNE = "#d4a03c";
let BLEU = "#2a4d6e";
let NOIR = "#1a1a1a";
let CREME = "#f5f0e1";

function setup() {
  createCanvas(500, 500);
  background(CREME);
  noStroke();

  // Grand cercle rouge
  fill(ROUGE);
  ellipse(150, 200, 200);

  // Triangle jaune
  fill(JAUNE);
  triangle(300, 350, 450, 350, 375, 200);

  // Rectangle bleu
  fill(BLEU);
  rect(50, 350, 180, 120);

  // Lignes noires
  stroke(NOIR);
  strokeWeight(4);
  line(0, 150, 500, 150);
  line(250, 0, 250, 500);

  // Petit cercle noir
  noStroke();
  fill(NOIR);
  ellipse(375, 120, 60);

  // Demi-cercle
  fill(JAUNE);
  arc(500, 250, 150, 150, HALF_PI, PI + HALF_PI);

  // Lignes diagonales
  stroke(NOIR);
  strokeWeight(2);
  line(300, 0, 500, 200);
  line(0, 400, 100, 300);

  // Texte Bauhaus style
  noStroke();
  fill(NOIR);
  textSize(24);
  textFont('sans-serif');
  textStyle(BOLD);
  text("GENUARY", 320, 480);
  textSize(12);
  text("2026", 450, 480);
}
