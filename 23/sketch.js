// GENUARY 23 - Explorer la transparence
// Cercles superposés avec transparence

let FOND = "#1a1a1a";

function setup() {
  createCanvas(500, 500);
  background(FOND);
  noStroke();

  // Cercles qui se chevauchent
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(50, 200);

    // Couleur aléatoire avec transparence
    let r = random(100, 255);
    let g = random(100, 255);
    let b = random(100, 255);

    fill(r, g, b, 50);
    ellipse(x, y, size);
  }

  // Trois grands cercles RGB
  let bigSize = 250;
  fill(255, 0, 0, 100);
  ellipse(width / 2 - 60, height / 2 - 40, bigSize);

  fill(0, 255, 0, 100);
  ellipse(width / 2 + 60, height / 2 - 40, bigSize);

  fill(0, 0, 255, 100);
  ellipse(width / 2, height / 2 + 60, bigSize);
}
