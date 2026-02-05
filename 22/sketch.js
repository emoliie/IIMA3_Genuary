// GENUARY 22 - Prêt pour traceur à plume
// Dessin optimisé pour plotter : lignes continues, pas de remplissage

let COULEUR = "#1a1a1a";
let FOND = "#fffef9";

function setup() {
  createCanvas(500, 500);
  background(FOND);
  stroke(COULEUR);
  strokeWeight(1);
  noFill();

  let cx = width / 2;
  let cy = height / 2;

  // Cercles concentriques
  for (let r = 20; r < 200; r += 15) {
    ellipse(cx, cy, r * 2);
  }

  // Spirale
  beginShape();
  for (let a = 0; a < TWO_PI * 5; a += 0.05) {
    let r = 200 + a * 8;
    let x = cx + r * cos(a) * 0.5;
    let y = cy + r * sin(a) * 0.5;
    if (r < 240) vertex(x, y);
  }
  endShape();

  // Lignes radiales
  for (let a = 0; a < TWO_PI; a += PI / 12) {
    let x1 = cx + 50 * cos(a);
    let y1 = cy + 50 * sin(a);
    let x2 = cx + 190 * cos(a);
    let y2 = cy + 190 * sin(a);
    line(x1, y1, x2, y2);
  }

  // Cadre
  rect(20, 20, width - 40, height - 40);
  rect(30, 30, width - 60, height - 60);
}
