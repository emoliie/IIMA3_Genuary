// GENUARY 13 - Autoportrait génératif
// Visage abstrait généré avec des formes simples

let PEAU = "#ddb892";
let CHEVEUX = "#3d2914";
let YEUX = "#1a1a2e";
let FOND = "#faf3e0";

function setup() {
  createCanvas(500, 500);
  background(FOND);
  noStroke();

  let cx = width / 2;
  let cy = height / 2;

  // Cheveux (arrière)
  fill(CHEVEUX);
  ellipse(cx, cy - 20, 220, 260);

  // Visage
  fill(PEAU);
  ellipse(cx, cy + 20, 180, 220);

  // Oreilles
  ellipse(cx - 95, cy + 20, 30, 50);
  ellipse(cx + 95, cy + 20, 30, 50);

  // Cheveux (avant)
  fill(CHEVEUX);
  arc(cx, cy - 80, 200, 120, PI, TWO_PI);

  // Sourcils
  fill(CHEVEUX);
  ellipse(cx - 35, cy - 20, 40, 8);
  ellipse(cx + 35, cy - 20, 40, 8);

  // Yeux
  fill(255);
  ellipse(cx - 35, cy + 10, 35, 25);
  ellipse(cx + 35, cy + 10, 35, 25);

  // Iris
  fill(YEUX);
  ellipse(cx - 35, cy + 10, 15, 20);
  ellipse(cx + 35, cy + 10, 15, 20);

  // Pupilles
  fill(0);
  ellipse(cx - 35, cy + 10, 8, 10);
  ellipse(cx + 35, cy + 10, 8, 10);

  // Reflets
  fill(255);
  ellipse(cx - 32, cy + 7, 4, 4);
  ellipse(cx + 38, cy + 7, 4, 4);

  // Nez
  fill(PEAU);
  stroke("#c9a87c");
  strokeWeight(2);
  noFill();
  arc(cx, cy + 50, 20, 25, QUARTER_PI, PI - QUARTER_PI);

  // Bouche
  noStroke();
  fill("#c1666b");
  arc(cx, cy + 90, 50, 30, 0, PI);

  // Joues (blush)
  fill(255, 150, 150, 80);
  ellipse(cx - 60, cy + 50, 40, 25);
  ellipse(cx + 60, cy + 50, 40, 25);
}
