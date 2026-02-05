// GENUARY 20 - Une seule ligne
// Courbe de Hilbert - une seule ligne qui remplit l'espace

let order = 5;
let points = [];
let COULEUR = "#e63946";
let FOND = "#f1faee";

function setup() {
  createCanvas(500, 500);
  background(FOND);

  let n = pow(2, order);
  let total = n * n;

  // Générer les points de la courbe de Hilbert
  for (let i = 0; i < total; i++) {
    let p = hilbert(i, order);
    let len = width / n;
    let x = p.x * len + len / 2;
    let y = p.y * len + len / 2;
    points.push(createVector(x, y));
  }

  // Dessiner la ligne
  stroke(COULEUR);
  strokeWeight(2);
  noFill();

  beginShape();
  for (let p of points) {
    vertex(p.x, p.y);
  }
  endShape();
}

function hilbert(i, order) {
  let points = [
    createVector(0, 0),
    createVector(0, 1),
    createVector(1, 1),
    createVector(1, 0)
  ];

  let index = i & 3;
  let v = points[index];

  for (let j = 1; j < order; j++) {
    i = i >>> 2;
    index = i & 3;
    let len = pow(2, j);

    if (index === 0) {
      let temp = v.x;
      v.x = v.y;
      v.y = temp;
    } else if (index === 1) {
      v.y += len;
    } else if (index === 2) {
      v.x += len;
      v.y += len;
    } else {
      let temp = len - 1 - v.x;
      v.x = len - 1 - v.y;
      v.y = temp;
      v.x += len;
    }
  }

  return v;
}
