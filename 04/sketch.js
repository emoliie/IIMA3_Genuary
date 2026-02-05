// GENUARY 04 - Basse résolution / Pixelisé
// Cercle pixelisé qui pulse

let pixelSize = 20;
let radius = 150;
let time = 0;

let COULEUR;
let FOND = "#0d1b2a";

function setup() {
  createCanvas(500, 500);
  noStroke();
  COULEUR = color("#00b4d8");
}

function draw() {
  background(FOND);

  // Rayon qui pulse
  let r = radius + sin(time) * 30;
  time += 0.03;

  // Grille de pixels
  for (let x = 0; x < width; x += pixelSize) {
    for (let y = 0; y < height; y += pixelSize) {
      let cx = x + pixelSize / 2;
      let cy = y + pixelSize / 2;
      let d = dist(cx, cy, width / 2, height / 2);

      // Si le pixel est dans le cercle
      if (d < r) {
        // Dégradé du centre vers l'extérieur
        let alpha = map(d, 0, r, 255, 100);
        fill(red(COULEUR), green(COULEUR), blue(COULEUR), alpha);
        rect(x, y, pixelSize - 2, pixelSize - 2);
      }
    }
  }
}
