// GENUARY 15 - Objet invisible (uniquement les ombres)
// Formes invisibles révélées par leurs ombres

let time = 0;
let FOND = "#f5f5f5";
let OMBRE = "#1a1a1a";

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(FOND);
  noStroke();

  // Source de lumière (suit la souris ou tourne)
  let lightX = width / 2 + cos(time) * 100;
  let lightY = 100 + sin(time * 0.5) * 50;

  // Sol
  fill("#e0e0e0");
  rect(0, height * 0.7, width, height * 0.3);

  // Objets invisibles et leurs ombres
  drawShadow(200, 350, 60, lightX, lightY, "circle");
  drawShadow(300, 320, 50, lightX, lightY, "square");
  drawShadow(380, 360, 40, lightX, lightY, "triangle");

  // Indicateur de lumière
  fill(255, 220, 100, 150);
  ellipse(lightX, lightY, 20);

  time += 0.02;
}

function drawShadow(objX, objY, objSize, lightX, lightY, shape) {
  // Calculer la direction de l'ombre
  let dx = objX - lightX;
  let dy = objY - lightY;
  let distance = dist(objX, objY, lightX, lightY);

  // Position et étirement de l'ombre
  let shadowX = objX + dx * 0.8;
  let shadowY = height * 0.75;
  let shadowW = objSize * 1.5 + distance * 0.1;
  let shadowH = objSize * 0.3;

  // Dessiner l'ombre
  fill(0, 50);

  push();
  translate(shadowX, shadowY);

  // Rotation basée sur la position de la lumière
  let angle = atan2(dy, dx);
  rotate(angle - HALF_PI);

  if (shape === "circle") {
    ellipse(0, 0, shadowW, shadowH);
  } else if (shape === "square") {
    rectMode(CENTER);
    rect(0, 0, shadowW, shadowH);
  } else if (shape === "triangle") {
    triangle(-shadowW/2, shadowH/2, shadowW/2, shadowH/2, 0, -shadowH/2);
  }

  pop();
}
