// GENUARY 14 - Tout s'adapte parfaitement
// Cercles qui s'emboîtent parfaitement (circle packing)

let circles = [];
let maxAttempts = 1000;

let COLORS = ["#003049", "#d62828", "#f77f00", "#fcbf49", "#eae2b7"];
let FOND = "#1a1a1a";

function setup() {
  createCanvas(500, 500);
  background(FOND);
  noStroke();

  // Générer les cercles
  for (let i = 0; i < 500; i++) {
    let placed = false;
    let attempts = 0;

    while (!placed && attempts < maxAttempts) {
      let x = random(width);
      let y = random(height);
      let r = random(5, 60);

      // Vérifier si le cercle s'adapte
      if (canPlace(x, y, r)) {
        // Réduire le rayon jusqu'à ce qu'il s'adapte
        while (r > 3 && !canPlace(x, y, r)) {
          r -= 1;
        }

        if (r > 3) {
          circles.push({ x, y, r });
          placed = true;
        }
      }
      attempts++;
    }
  }

  // Dessiner les cercles
  for (let c of circles) {
    fill(random(COLORS));
    ellipse(c.x, c.y, c.r * 2);
  }
}

function canPlace(x, y, r) {
  // Vérifier les bords
  if (x - r < 0 || x + r > width || y - r < 0 || y + r > height) {
    return false;
  }

  // Vérifier les collisions avec les autres cercles
  for (let c of circles) {
    let d = dist(x, y, c.x, c.y);
    if (d < r + c.r + 2) {
      return false;
    }
  }

  return true;
}
