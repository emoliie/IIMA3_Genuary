// GENUARY 24 - Cauchemar du perfectionniste
// Grille presque parfaite avec une seule imperfection

let COULEUR = "#2d3436";
let FOND = "#dfe6e9";
let ACCENT = "#d63031";

function setup() {
  createCanvas(500, 500);
  background(FOND);

  let cols = 10;
  let rows = 10;
  let cellW = width / cols;
  let cellH = height / rows;

  // Position de l'élément imparfait
  let imperfectI = floor(random(cols));
  let imperfectJ = floor(random(rows));

  stroke(COULEUR);
  strokeWeight(2);
  noFill();

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW + cellW / 2;
      let y = j * cellH + cellH / 2;
      let size = cellW * 0.6;

      if (i === imperfectI && j === imperfectJ) {
        // L'élément imparfait - légèrement décalé et tourné
        stroke(ACCENT);
        push();
        translate(x + 3, y - 2);
        rotate(0.05);
        rectMode(CENTER);
        rect(0, 0, size * 1.05, size * 0.95);
        pop();
        stroke(COULEUR);
      } else {
        // Éléments parfaits
        rectMode(CENTER);
        rect(x, y, size, size);
      }
    }
  }
}
