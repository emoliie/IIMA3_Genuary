// GENUARY 05 - Écrire "Genuary" sans police
// Lettres dessinées avec des lignes

let COULEUR = "#9b2226";
let FOND = "#fdf0d5";

function setup() {
  createCanvas(500, 500);
  background(FOND);
  stroke(COULEUR);
  strokeWeight(4);
  strokeCap(ROUND);
  noFill();

  let startX = 30;
  let y = 250;
  let h = 60;
  let w = 40;
  let gap = 15;

  // G
  arc(startX + w/2, y, w, h, -HALF_PI + 0.3, PI + HALF_PI);
  line(startX + w/2, y, startX + w, y);
  startX += w + gap;

  // E
  line(startX, y - h/2, startX, y + h/2);
  line(startX, y - h/2, startX + w, y - h/2);
  line(startX, y, startX + w * 0.7, y);
  line(startX, y + h/2, startX + w, y + h/2);
  startX += w + gap;

  // N
  line(startX, y + h/2, startX, y - h/2);
  line(startX, y - h/2, startX + w, y + h/2);
  line(startX + w, y + h/2, startX + w, y - h/2);
  startX += w + gap;

  // U
  line(startX, y - h/2, startX, y + h/4);
  arc(startX + w/2, y + h/4, w, h/2, 0, PI);
  line(startX + w, y + h/4, startX + w, y - h/2);
  startX += w + gap;

  // A
  line(startX, y + h/2, startX + w/2, y - h/2);
  line(startX + w/2, y - h/2, startX + w, y + h/2);
  line(startX + w * 0.2, y + h/6, startX + w * 0.8, y + h/6);
  startX += w + gap;

  // R
  line(startX, y + h/2, startX, y - h/2);
  arc(startX + w * 0.3, y - h/4, w * 0.6, h/2, -HALF_PI, HALF_PI);
  line(startX + w * 0.3, y, startX + w, y + h/2);
  startX += w + gap;

  // Y
  line(startX, y - h/2, startX + w/2, y);
  line(startX + w, y - h/2, startX + w/2, y);
  line(startX + w/2, y, startX + w/2, y + h/2);
}
