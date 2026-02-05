// GENUARY 31 - GLSL Shaders
// Shader de plasma coloré

let theShader;

let vertShader = `
attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
}
`;

let fragShader = `
precision mediump float;
varying vec2 vTexCoord;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 uv = vTexCoord;
  vec2 p = uv * 2.0 - 1.0;
  p.x *= u_resolution.x / u_resolution.y;

  float t = u_time * 0.5;

  // Plasma effect
  float v1 = sin(p.x * 5.0 + t);
  float v2 = sin(5.0 * (p.x * sin(t / 2.0) + p.y * cos(t / 3.0)) + t);
  float v3 = sin(sqrt(p.x * p.x + p.y * p.y) * 10.0 + t);

  float v = v1 + v2 + v3;

  // Couleurs
  vec3 col;
  col.r = sin(v * 3.14159) * 0.5 + 0.5;
  col.g = sin(v * 3.14159 + 2.094) * 0.5 + 0.5;
  col.b = sin(v * 3.14159 + 4.188) * 0.5 + 0.5;

  gl_FragColor = vec4(col, 1.0);
}
`;

function setup() {
  createCanvas(500, 500, WEBGL);
  noStroke();

  theShader = createShader(vertShader, fragShader);
}

function draw() {
  shader(theShader);

  theShader.setUniform('u_time', millis() / 1000.0);
  theShader.setUniform('u_resolution', [width, height]);

  rect(0, 0, width, height);
}
