// GENUARY 26 - Grilles récursives
// Grille qui se subdivise récursivement

let COULEUR = "#1a1a2e";
let FOND = "#edf2f4";

function setup() {
  createCanvas(500, 500);
  background(FOND);
  stroke(COULEUR);
  strokeWeight(1);
  noFill();

  recursiveGrid(0, 0, width, height, 0);
}

function recursiveGrid(x, y, w, h, depth) {
  // Dessiner le rectangle
  rect(x, y, w, h);

  // Condition d'arrêt
  if (w < 20 || h < 20 || depth > 5) return;

  // Probabilité de subdivision
  if (random() > 0.3) {
    // Subdiviser en 4
    let halfW = w / 2;
    let halfH = h / 2;

    recursiveGrid(x, y, halfW, halfH, depth + 1);
    recursiveGrid(x + halfW, y, halfW, halfH, depth + 1);
    recursiveGrid(x, y + halfH, halfW, halfH, depth + 1);
    recursiveGrid(x + halfW, y + halfH, halfW, halfH, depth + 1);
  } else if (random() > 0.5) {
    // Subdiviser horizontalement
    let halfH = h / 2;
    recursiveGrid(x, y, w, halfH, depth + 1);
    recursiveGrid(x, y + halfH, w, halfH, depth + 1);
  } else {
    // Subdiviser verticalement
    let halfW = w / 2;
    recursiveGrid(x, y, halfW, h, depth + 1);
    recursiveGrid(x + halfW, y, halfW, h, depth + 1);
  }
}
