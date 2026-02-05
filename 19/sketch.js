// GENUARY 19 - 16x16
// Grille 16x16 avec symboles aléatoires

let FOND = "#fefae0";
let COULEUR = "#283618";

function setup() {
  createCanvas(500, 500);
  background(FOND);

  let cellSize = width / 16;

  stroke(COULEUR);
  strokeWeight(2);
  noFill();

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      let x = i * cellSize;
      let y = j * cellSize;
      let symbol = floor(random(4));

      push();
      translate(x + cellSize / 2, y + cellSize / 2);

      if (symbol === 0) {
        // Cercle
        ellipse(0, 0, cellSize * 0.7);
      } else if (symbol === 1) {
        // Croix
        line(-cellSize * 0.3, 0, cellSize * 0.3, 0);
        line(0, -cellSize * 0.3, 0, cellSize * 0.3);
      } else if (symbol === 2) {
        // Diagonale
        line(-cellSize * 0.3, -cellSize * 0.3, cellSize * 0.3, cellSize * 0.3);
      } else {
        // Arc
        arc(0, 0, cellSize * 0.7, cellSize * 0.7, 0, PI);
      }

      pop();
    }
  }
}
