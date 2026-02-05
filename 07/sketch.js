// GENUARY 07 - Algèbre booléenne
// Visualisation des opérations XOR sur une grille

let cols = 16;
let rows = 16;

let COULEUR1 = "#7209b7";
let COULEUR2 = "#3a0ca3";
let FOND = "#f8f9fa";

function setup() {
  createCanvas(500, 500);
  noStroke();

  let cellW = width / cols;
  let cellH = height / rows;

  background(FOND);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;

      // Opération XOR entre les coordonnées
      let xorValue = i ^ j;

      // Différentes visualisations selon le résultat
      if (xorValue % 2 === 0) {
        fill(COULEUR1);
      } else {
        fill(COULEUR2);
      }

      // Taille basée sur la valeur XOR
      let size = map(xorValue, 0, 15, cellW * 0.3, cellW * 0.9);

      rect(x + (cellW - size) / 2, y + (cellH - size) / 2, size, size);
    }
  }
}
