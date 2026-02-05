// GENUARY 16 - Ordre et désordre
// Transition graduelle de l'ordre vers le chaos

let COULEUR = "#2d3436";
let FOND = "#dfe6e9";

function setup() {
  createCanvas(500, 500);
  background(FOND);
  stroke(COULEUR);
  strokeWeight(2);
  noFill();

  let cols = 15;
  let rows = 15;
  let cellW = width / cols;
  let cellH = height / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW + cellW / 2;
      let y = j * cellH + cellH / 2;

      // Le chaos augmente de gauche à droite
      let chaos = map(i, 0, cols - 1, 0, 1);

      // Position avec perturbation
      let offsetX = random(-cellW * 0.4 * chaos, cellW * 0.4 * chaos);
      let offsetY = random(-cellH * 0.4 * chaos, cellH * 0.4 * chaos);

      // Taille avec variation
      let size = cellW * 0.6;
      size += random(-size * 0.3 * chaos, size * 0.3 * chaos);

      // Rotation avec perturbation
      let rotation = random(-PI * chaos, PI * chaos);

      push();
      translate(x + offsetX, y + offsetY);
      rotate(rotation);

      // Dessiner un carré
      rectMode(CENTER);
      rect(0, 0, size, size);

      pop();
    }
  }
}
