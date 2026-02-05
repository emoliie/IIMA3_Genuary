// GENUARY 12 - Uniquement des boîtes
// Subdivision récursive de rectangles

let COLORS = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let FOND = "#1a1a1a";

function setup() {
  createCanvas(500, 500);
  background(FOND);
  noStroke();

  // Commencer la subdivision
  subdivide(10, 10, width - 20, height - 20, 0);
}

function subdivide(x, y, w, h, depth) {
  // Arrêter si trop petit ou profondeur max
  if (w < 20 || h < 20 || depth > 5) {
    // Dessiner la boîte
    fill(random(COLORS));
    rect(x + 2, y + 2, w - 4, h - 4);
    return;
  }

  // Décider aléatoirement de subdiviser ou non
  if (random() < 0.3 && depth > 1) {
    fill(random(COLORS));
    rect(x + 2, y + 2, w - 4, h - 4);
    return;
  }

  // Subdiviser horizontalement ou verticalement
  if (random() < 0.5) {
    // Division verticale
    let splitX = x + w * random(0.3, 0.7);
    subdivide(x, y, splitX - x, h, depth + 1);
    subdivide(splitX, y, x + w - splitX, h, depth + 1);
  } else {
    // Division horizontale
    let splitY = y + h * random(0.3, 0.7);
    subdivide(x, y, w, splitY - y, depth + 1);
    subdivide(x, splitY, w, y + h - splitY, depth + 1);
  }
}
