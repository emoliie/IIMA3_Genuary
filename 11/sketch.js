// GENUARY 11 - Quine
// Le code s'affiche lui-même visuellement

let code;
let FOND = "#282c34";
let COULEUR = "#61afef";

function setup() {
  createCanvas(500, 500);
  background(FOND);

  // Le code source lui-même
  code = setup.toString() + "\n\n" + draw.toString();

  fill(COULEUR);
  textFont('monospace');
  textSize(8);
  textLeading(10);

  // Afficher le code en spirale
  let angle = 0;
  let radius = 10;
  let charIndex = 0;

  translate(width / 2, height / 2);

  while (radius < 240 && charIndex < code.length) {
    let x = radius * cos(angle);
    let y = radius * sin(angle);

    let c = code.charAt(charIndex);
    if (c !== ' ' && c !== '\n') {
      push();
      translate(x, y);
      rotate(angle + HALF_PI);
      text(c, 0, 0);
      pop();
    }

    angle += 0.15;
    radius += 0.3;
    charIndex++;
  }
}

function draw() {
  // Pas d'animation - le quine est statique
}
