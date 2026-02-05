// GENUARY 30 - Ce n'est pas un bug, c'est une fonctionnalité
// Glitch art intentionnel

let img;
let FOND = "#000000";

function setup() {
  createCanvas(500, 500);
  pixelDensity(1);

  // Créer une image de base
  img = createGraphics(500, 500);
  img.background("#1a1a2e");

  // Dessiner des formes
  img.noStroke();
  img.fill("#e63946");
  img.ellipse(250, 200, 150);
  img.fill("#2a9d8f");
  img.rect(100, 300, 150, 150);
  img.fill("#e9c46a");
  img.triangle(300, 450, 450, 450, 375, 300);
}

function draw() {
  // Afficher l'image
  image(img, 0, 0);

  // Appliquer des glitches
  loadPixels();

  // Bug 1: Décalage de lignes aléatoires
  for (let y = 0; y < height; y++) {
    if (random() < 0.03) {
      let offset = floor(random(-50, 50));
      for (let x = 0; x < width; x++) {
        let srcX = (x + offset + width) % width;
        let srcIndex = (y * width + srcX) * 4;
        let dstIndex = (y * width + x) * 4;

        // Copier avec décalage de canal
        pixels[dstIndex] = pixels[srcIndex + floor(random(3))];
        pixels[dstIndex + 1] = pixels[srcIndex + 1];
        pixels[dstIndex + 2] = pixels[srcIndex + floor(random(3))];
      }
    }
  }

  // Bug 2: Blocs corrompus
  if (random() < 0.1) {
    let bx = floor(random(width - 50));
    let by = floor(random(height - 30));
    let bw = floor(random(20, 100));
    let bh = floor(random(10, 50));

    for (let y = by; y < by + bh && y < height; y++) {
      for (let x = bx; x < bx + bw && x < width; x++) {
        let i = (y * width + x) * 4;
        pixels[i] = pixels[i] ^ 255;     // Inverser R
        pixels[i + 1] = pixels[i + 1];   // Garder G
        pixels[i + 2] = pixels[i + 2] ^ 128; // XOR B
      }
    }
  }

  updatePixels();

  // Bug 3: Lignes de scan
  stroke(255, 20);
  for (let y = 0; y < height; y += 4) {
    line(0, y, width, y);
  }
}
