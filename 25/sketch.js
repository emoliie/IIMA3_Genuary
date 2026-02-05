// GENUARY 25 - Géométrie organique
// Formes blob avec du bruit de Perlin

let COULEUR = "#2d6a4f";
let FOND = "#d8f3dc";
let time = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(FOND);
  translate(width / 2, height / 2);

  // Plusieurs blobs
  for (let b = 0; b < 3; b++) {
    let baseRadius = 80 + b * 50;
    let offset = b * 100;

    stroke(COULEUR);
    strokeWeight(2);
    noFill();

    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.05) {
      let noiseVal = noise(cos(a) + 1 + offset, sin(a) + 1 + offset, time);
      let r = baseRadius + noiseVal * 60;
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
  }

  time += 0.01;
}
