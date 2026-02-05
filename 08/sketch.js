// GENUARY 08 - Métropole générative
// Skyline de buildings générés aléatoirement

let CIEL = "#1a1a2e";
let BUILDING = "#16213e";
let FENETRE_ON = "#ffd60a";
let FENETRE_OFF = "#0f0f23";

function setup() {
  createCanvas(500, 500);
  noStroke();

  // Ciel de nuit
  background(CIEL);

  // Étoiles
  fill(255, 200);
  for (let i = 0; i < 50; i++) {
    ellipse(random(width), random(height * 0.4), random(1, 3));
  }

  // Buildings - plusieurs couches pour la profondeur
  drawBuildings(height * 0.5, "#0a0a15", 0.3);
  drawBuildings(height * 0.4, "#16213e", 0.5);
  drawBuildings(height * 0.3, "#1f2937", 0.7);
}

function drawBuildings(minHeight, couleur, windowChance) {
  let x = 0;

  while (x < width) {
    let w = random(30, 80);
    let h = random(minHeight, height * 0.85);
    let y = height - h;

    // Building
    fill(couleur);
    rect(x, y, w, h);

    // Fenêtres
    let fenW = 6;
    let fenH = 8;
    let gap = 12;

    for (let fx = x + 8; fx < x + w - 8; fx += gap) {
      for (let fy = y + 15; fy < height - 20; fy += gap + 4) {
        if (random() < windowChance) {
          fill(FENETRE_ON);
        } else {
          fill(FENETRE_OFF);
        }
        rect(fx, fy, fenW, fenH);
      }
    }

    x += w + random(2, 10);
  }
}
