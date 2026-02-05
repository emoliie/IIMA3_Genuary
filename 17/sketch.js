// GENUARY 17 - Papier peint (motifs répétitifs)
// Motif géométrique inspiré des carreaux marocains

let COLORS = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261"];
let FOND = "#1a1a1a";

function setup() {
  createCanvas(500, 500);
  background(FOND);
  noStroke();

  let tileSize = 50;

  for (let x = 0; x < width; x += tileSize) {
    for (let y = 0; y < height; y += tileSize) {
      drawTile(x, y, tileSize);
    }
  }
}

function drawTile(x, y, size) {
  let half = size / 2;

  push();
  translate(x, y);

  // Fond du carreau
  fill(COLORS[0]);
  rect(0, 0, size, size);

  // Losange central
  fill(COLORS[1]);
  quad(half, 0, size, half, half, size, 0, half);

  // Triangles dans les coins
  fill(COLORS[2]);
  triangle(0, 0, half, 0, 0, half);
  triangle(size, 0, size, half, half, 0);
  triangle(size, size, half, size, size, half);
  triangle(0, size, 0, half, half, size);

  // Petit losange au centre
  fill(COLORS[3]);
  let q = size / 4;
  quad(half, q, half + q, half, half, half + q, q, half);

  pop();
}
