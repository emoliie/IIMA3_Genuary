// GENUARY 06 - Lumières allumées/éteintes
// Grille de lumières qui s'allument et s'éteignent en vagues

let cols = 10;
let rows = 10;
let lights = [];

let ON = "#ffd60a";
let OFF = "#1a1a2e";
let FOND = "#0f0f23";

function setup() {
  createCanvas(500, 500);
  noStroke();

  // Initialiser les lumières
  for (let i = 0; i < cols; i++) {
    lights[i] = [];
    for (let j = 0; j < rows; j++) {
      lights[i][j] = 0;
    }
  }
}

function draw() {
  background(FOND);

  let cellW = width / cols;
  let cellH = height / rows;
  let time = frameCount * 0.05;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW + cellW / 2;
      let y = j * cellH + cellH / 2;

      // Onde sinusoïdale pour allumer/éteindre
      let wave = sin(time + i * 0.5 + j * 0.3);
      let isOn = wave > 0;

      // Intensité de la lumière
      let brightness = map(wave, -1, 1, 0, 1);
      brightness = constrain(brightness, 0, 1);

      // Dessiner la lumière
      if (isOn) {
        // Halo
        fill(255, 214, 10, brightness * 50);
        ellipse(x, y, cellW * 0.9, cellH * 0.9);

        // Lumière centrale
        fill(lerpColor(color(OFF), color(ON), brightness));
        ellipse(x, y, cellW * 0.5, cellH * 0.5);
      } else {
        fill(OFF);
        ellipse(x, y, cellW * 0.5, cellH * 0.5);
      }
    }
  }
}
