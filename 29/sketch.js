// GENUARY 29 - Évolution génétique et mutation
// Petites créatures qui évoluent avec des mutations

let creatures = [];
let generation = 0;

let FOND = "#0a1628";

function setup() {
  createCanvas(500, 500);

  // Créer la population initiale
  for (let i = 0; i < 12; i++) {
    creatures.push(new Creature());
  }
}

function draw() {
  background(FOND);

  // Dessiner et mettre à jour les créatures
  for (let c of creatures) {
    c.update();
    c.display();
  }

  // Afficher la génération
  fill(255);
  noStroke();
  textSize(14);
  text("Génération: " + generation, 10, 25);
  text("Cliquez pour évoluer", 10, 45);
}

function mousePressed() {
  // Nouvelle génération avec mutations
  let newCreatures = [];

  for (let i = 0; i < 12; i++) {
    let parent = random(creatures);
    newCreatures.push(parent.reproduce());
  }

  creatures = newCreatures;
  generation++;
}

class Creature {
  constructor(genes) {
    if (genes) {
      this.genes = genes;
    } else {
      // Gènes aléatoires
      this.genes = {
        bodyW: random(25, 50),
        bodyH: random(20, 40),
        r: random(100, 255),
        g: random(100, 255),
        b: random(100, 255),
        speed: random(0.5, 2),
        legs: floor(random(2, 6)),
        legLength: random(10, 25),
        eyeSize: random(5, 12),
        eyeSpacing: random(0.3, 0.7),
        hasAntenna: random() > 0.5,
        hasTail: random() > 0.5
      };
    }

    this.x = random(50, width - 50);
    this.y = random(80, height - 50);
    this.angle = random(TWO_PI);
    this.time = random(1000);
  }

  update() {
    this.time += 0.05;
    this.x += cos(this.angle) * this.genes.speed;
    this.y += sin(this.angle) * this.genes.speed;
    this.angle += sin(this.time) * 0.05;

    // Rebondir sur les bords
    if (this.x < 30 || this.x > width - 30) this.angle = PI - this.angle;
    if (this.y < 60 || this.y > height - 30) this.angle = -this.angle;

    this.x = constrain(this.x, 30, width - 30);
    this.y = constrain(this.y, 60, height - 30);
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    let col = color(this.genes.r, this.genes.g, this.genes.b);

    // Pattes qui bougent
    stroke(red(col) * 0.7, green(col) * 0.7, blue(col) * 0.7);
    strokeWeight(3);
    for (let i = 0; i < this.genes.legs; i++) {
      let legAngle = map(i, 0, this.genes.legs - 1, -PI / 3, PI / 3);
      let wiggle = sin(this.time * 3 + i * 2) * 0.3;

      // Pattes du haut
      let lx = cos(legAngle + wiggle + HALF_PI) * this.genes.legLength;
      let ly = sin(legAngle + wiggle + HALF_PI) * this.genes.legLength;
      line(0, -this.genes.bodyH * 0.3, lx, ly - this.genes.bodyH * 0.3);

      // Pattes du bas
      lx = cos(-legAngle - wiggle - HALF_PI) * this.genes.legLength;
      ly = sin(-legAngle - wiggle - HALF_PI) * this.genes.legLength;
      line(0, this.genes.bodyH * 0.3, lx, ly + this.genes.bodyH * 0.3);
    }

    // Queue
    if (this.genes.hasTail) {
      stroke(red(col) * 0.8, green(col) * 0.8, blue(col) * 0.8);
      strokeWeight(4);
      noFill();
      let tailWiggle = sin(this.time * 2) * 0.5;
      beginShape();
      vertex(-this.genes.bodyW / 2, 0);
      quadraticVertex(
        -this.genes.bodyW / 2 - 15, tailWiggle * 15,
        -this.genes.bodyW / 2 - 25, tailWiggle * 20
      );
      endShape();
    }

    // Corps (forme ovale)
    noStroke();
    fill(col);
    ellipse(0, 0, this.genes.bodyW, this.genes.bodyH);

    // Ventre plus clair
    fill(red(col) + 40, green(col) + 40, blue(col) + 40, 150);
    ellipse(0, 2, this.genes.bodyW * 0.6, this.genes.bodyH * 0.5);

    // Antennes
    if (this.genes.hasAntenna) {
      stroke(red(col) * 0.7, green(col) * 0.7, blue(col) * 0.7);
      strokeWeight(2);
      let antennaWiggle = sin(this.time * 4) * 0.2;
      line(this.genes.bodyW * 0.3, -this.genes.bodyH * 0.3,
           this.genes.bodyW * 0.4 + 10, -this.genes.bodyH * 0.5 - 10 + antennaWiggle * 10);
      line(this.genes.bodyW * 0.3, this.genes.bodyH * 0.3,
           this.genes.bodyW * 0.4 + 10, this.genes.bodyH * 0.5 + 10 - antennaWiggle * 10);

      // Petites boules au bout
      noStroke();
      fill(255, 100, 100);
      ellipse(this.genes.bodyW * 0.4 + 10, -this.genes.bodyH * 0.5 - 10 + antennaWiggle * 10, 5);
      ellipse(this.genes.bodyW * 0.4 + 10, this.genes.bodyH * 0.5 + 10 - antennaWiggle * 10, 5);
    }

    // Yeux
    let eyeX = this.genes.bodyW * 0.2;
    let eyeY = this.genes.bodyH * this.genes.eyeSpacing * 0.5;

    // Blanc des yeux
    fill(255);
    noStroke();
    ellipse(eyeX, -eyeY, this.genes.eyeSize * 1.3, this.genes.eyeSize * 1.3);
    ellipse(eyeX, eyeY, this.genes.eyeSize * 1.3, this.genes.eyeSize * 1.3);

    // Pupilles (regardent dans la direction du mouvement)
    fill(20);
    let pupilOffset = 2;
    ellipse(eyeX + pupilOffset, -eyeY, this.genes.eyeSize * 0.6, this.genes.eyeSize * 0.6);
    ellipse(eyeX + pupilOffset, eyeY, this.genes.eyeSize * 0.6, this.genes.eyeSize * 0.6);

    // Reflets
    fill(255);
    ellipse(eyeX + pupilOffset + 1, -eyeY - 1, 2, 2);
    ellipse(eyeX + pupilOffset + 1, eyeY - 1, 2, 2);

    pop();
  }

  reproduce() {
    let newGenes = {};

    for (let key in this.genes) {
      newGenes[key] = this.genes[key];

      // Mutation aléatoire (15% de chance)
      if (random() < 0.15) {
        if (key === 'legs') {
          newGenes[key] = constrain(this.genes[key] + floor(random(-1, 2)), 2, 6);
        } else if (key === 'r' || key === 'g' || key === 'b') {
          newGenes[key] = constrain(this.genes[key] + random(-40, 40), 50, 255);
        } else if (key === 'hasAntenna' || key === 'hasTail') {
          newGenes[key] = random() > 0.5;
        } else if (typeof this.genes[key] === 'number') {
          newGenes[key] = this.genes[key] * random(0.8, 1.2);
        }
      }
    }

    return new Creature(newGenes);
  }
}
