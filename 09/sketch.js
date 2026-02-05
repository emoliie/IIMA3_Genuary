// GENUARY 09 - Automates cellulaires avec règles farfelues
// Règle 110 de Wolfram avec couleurs

let cells;
let cellSize = 5;
let cols;
let currentRow = 0;

let COLORS = ["#ff006e", "#8338ec", "#3a86ff", "#06d6a0"];
let FOND = "#000000";

function setup() {
  createCanvas(500, 500);
  background(FOND);

  cols = floor(width / cellSize);
  cells = new Array(cols).fill(0);

  // Commencer avec une cellule au centre
  cells[floor(cols / 2)] = 1;

  noStroke();
}

function draw() {
  if (currentRow * cellSize >= height) {
    noLoop();
    return;
  }

  // Dessiner la ligne actuelle
  for (let i = 0; i < cols; i++) {
    if (cells[i] === 1) {
      // Couleur basée sur la position
      let colorIndex = (i + currentRow) % COLORS.length;
      fill(COLORS[colorIndex]);
      rect(i * cellSize, currentRow * cellSize, cellSize, cellSize);
    }
  }

  // Calculer la prochaine génération (Règle 110)
  let nextCells = new Array(cols).fill(0);

  for (let i = 1; i < cols - 1; i++) {
    let left = cells[i - 1];
    let center = cells[i];
    let right = cells[i + 1];

    // Règle 110 : 01101110 en binaire
    let pattern = left * 4 + center * 2 + right;

    // Règle farfelue : on ajoute un peu de chaos
    if (pattern === 7) nextCells[i] = 0;
    else if (pattern === 6) nextCells[i] = 1;
    else if (pattern === 5) nextCells[i] = 1;
    else if (pattern === 4) nextCells[i] = 0;
    else if (pattern === 3) nextCells[i] = 1;
    else if (pattern === 2) nextCells[i] = 1;
    else if (pattern === 1) nextCells[i] = 1;
    else nextCells[i] = 0;
  }

  cells = nextCells;
  currentRow++;
}
