// GENUARY 27 - Forme vivante / en croissance
// Arbre fractal qui pousse

let angle = 0;
let maxDepth = 0;
let growing = true;

let BRANCHE = "#5c4033";
let FEUILLE = "#228b22";
let FOND = "#87ceeb";

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(FOND);

  // Sol
  fill("#8b4513");
  noStroke();
  rect(0, height - 30, width, 30);

  // Dessiner l'arbre
  stroke(BRANCHE);
  strokeWeight(8);
  translate(width / 2, height - 30);
  branch(100, 0);

  // Croissance progressive
  if (growing && frameCount % 30 === 0) {
    maxDepth++;
    if (maxDepth > 8) growing = false;
  }

  angle = sin(frameCount * 0.02) * 0.1;
}

function branch(len, depth) {
  if (depth > maxDepth) return;

  // Épaisseur diminue avec la profondeur
  strokeWeight(map(depth, 0, 8, 8, 1));

  // Couleur : branche ou feuille
  if (depth > 5) {
    stroke(FEUILLE);
  } else {
    stroke(BRANCHE);
  }

  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 4) {
    push();
    rotate(PI / 6 + angle);
    branch(len * 0.7, depth + 1);
    pop();

    push();
    rotate(-PI / 6 - angle);
    branch(len * 0.7, depth + 1);
    pop();
  }
}
