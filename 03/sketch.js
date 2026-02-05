// GENUARY 03 - Suite de Fibonacci
// Spirale dorée construite avec des arcs

let COULEUR = "#2d6a4f";
let FOND = "#d8f3dc";

function setup() {
  createCanvas(500, 500);
  background(FOND);
  stroke(COULEUR);
  strokeWeight(2);
  noFill();

  // Suite de Fibonacci
  let fib = [1, 1];
  for (let i = 2; i < 12; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  let scale = 3;
  let x = width / 2;
  let y = height / 2 + 50;

  // Dessiner les carrés et arcs
  for (let i = 0; i < fib.length; i++) {
    let size = fib[i] * scale;

    // Dessiner le carré
    push();
    translate(x, y);
    rect(0, 0, size, size);

    // Dessiner l'arc de la spirale
    strokeWeight(3);
    let startAngle, endAngle;

    if (i % 4 === 0) {
      arc(size, size, size * 2, size * 2, PI, PI + HALF_PI);
    } else if (i % 4 === 1) {
      arc(0, size, size * 2, size * 2, -HALF_PI, 0);
    } else if (i % 4 === 2) {
      arc(0, 0, size * 2, size * 2, 0, HALF_PI);
    } else {
      arc(size, 0, size * 2, size * 2, HALF_PI, PI);
    }
    strokeWeight(2);
    pop();

    // Déplacer pour le prochain carré
    if (i % 4 === 0) y -= fib[i + 1] * scale;
    else if (i % 4 === 1) x += size;
    else if (i % 4 === 2) y += size;
    else x -= fib[i + 1] * scale;
  }
}
