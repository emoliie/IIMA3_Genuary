// GENUARY 10 - Coordonnées polaires
// Rose polaire animée

let time = 0;
let n = 5; // Nombre de pétales
let d = 3; // Paramètre de la rose

let COULEUR = "#e63946";
let FOND = "#1d3557";

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(FOND);
  translate(width / 2, height / 2);

  stroke(COULEUR);
  strokeWeight(2);
  noFill();

  // Rose polaire : r = cos(n/d * theta)
  let k = n / d;

  beginShape();
  for (let theta = 0; theta < TWO_PI * d; theta += 0.01) {
    let r = 180 * cos(k * theta + time);
    let x = r * cos(theta);
    let y = r * sin(theta);
    vertex(x, y);
  }
  endShape(CLOSE);

  // Deuxième rose décalée
  stroke("#a8dadc");
  beginShape();
  for (let theta = 0; theta < TWO_PI * d; theta += 0.01) {
    let r = 140 * cos(k * theta - time * 0.5);
    let x = r * cos(theta);
    let y = r * sin(theta);
    vertex(x, y);
  }
  endShape(CLOSE);

  // Troisième rose
  stroke("#f1faee");
  strokeWeight(1);
  beginShape();
  for (let theta = 0; theta < TWO_PI * d; theta += 0.01) {
    let r = 100 * cos(k * theta + time * 1.5);
    let x = r * cos(theta);
    let y = r * sin(theta);
    vertex(x, y);
  }
  endShape(CLOSE);

  time += 0.02;
}
