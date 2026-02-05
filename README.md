# Genuary 2026

31 days of generative creation in p5.js for the [Genuary](https://genuary.art/) challenge.

**Made with the help of Claude (Anthropic)**

## Prompts and Creations

| Day | Prompt | Description | Type |
|-----|--------|-------------|------|
| 01 | One color, one shape | Minimalist square spiral | Static |
| 02 | The 12 principles of animation | Bouncing ball with squash & stretch | Animated |
| 03 | Fibonacci sequence | Golden spiral with squares and arcs | Static |
| 04 | Low resolution | Pulsing pixelated circle | Animated |
| 05 | Write "Genuary" without a font | Letters drawn with lines and arcs | Static |
| 06 | Lights on/off | Grid of lights with wave effect | Animated |
| 07 | Boolean algebra | XOR pattern on 16x16 grid | Static |
| 08 | Generative metropolis | Night skyline with illuminated windows | Static |
| 09 | Cellular automata | Wolfram's Rule 110 in colors | Animated |
| 10 | Polar coordinates | Animated polar roses | Animated |
| 11 | Quine | Source code displayed in spiral | Static |
| 12 | Only boxes | Recursive subdivision of rectangles | Static |
| 13 | Generative self-portrait | Stylized face with geometric shapes | Static |
| 14 | Everything fits perfectly | Circle packing | Static |
| 15 | Invisible object (shadows) | Shapes revealed by their shadows | Animated |
| 16 | Order and disorder | Grid that disorganizes from left to right | Static |
| 17 | Wallpaper | Moroccan-style geometric tiles | Static |
| 18 | Unexpected path | Walk based on even/odd rule | Animated |
| 19 | 16x16 | Grid of random symbols | Static |
| 20 | One single line | Hilbert curve | Static |
| 21 | Bauhaus style | Geometric poster | Static |
| 22 | Pen plotter | Drawing optimized for plotter | Static |
| 23 | Transparency | Overlapping RGB circles | Static |
| 24 | Perfectionist's nightmare | Perfect grid with a single flaw | Static |
| 25 | Organic geometry | Blobs with Perlin noise | Animated |
| 26 | Recursive grids | Recursive subdivision | Static |
| 27 | Growing shape | Growing fractal tree | Animated |
| 28 | HTML only | Pure CSS animation (no JS) | Animated |
| 29 | Genetic evolution | Creatures with mutations | Animated/Interactive |
| 30 | This is not a bug | Intentional glitch art | Animated |
| 31 | GLSL Shaders | Shader plasma effect | Animated |

## How to View the Sketches

### Main Gallery

Open `index.html` at the project root with **Live Server** (VS Code) to see all sketches in an interactive gallery:
- Thumbnail preview of each sketch
- Click to open fullscreen with navigation (previous/next)
- Keyboard navigation: `←` `→` to navigate, `Esc` to close

### Running the Project

1. Open the `genuary` folder in VS Code
2. Right-click on `index.html` → "Open with Live Server"
3. Or use a local server: `python3 -m http.server 8000`

```
genuary/
├── index.html        ← Main gallery
├── chatbot/          ← GenBot (chatbot)
│   ├── index.html
│   ├── sketch.js
│   ├── dialogue.rive
│   └── begin.rive
├── 01/index.html
├── 02/index.html
├── ...
└── 31/index.html
```

## Technologies

- **p5.js** (via CDN) for days 01-27 and 29-31
- **Pure CSS** for day 28
- **WebGL/GLSL** for day 31
- **RiveScript** for GenBot chatbot

## GenBot - The Gallery Guardian

An interactive chatbot with personality that discusses the 31 Genuary projects!

**Access**: Click the "Chat with GenBot" button on the main page, or open `chatbot/index.html`

**Personality**:
- Passionate about generative art, enthusiastic and sometimes shy
- Favorite project: Day 10 (polar roses)
- Can pout if ignored or criticized
- Reacts with emotions (*jumps*, *blushes*, *pouts*)

**Features**:
- Talks about each of the 31 days with unique descriptions
- Clickable suggestions to start the conversation
- Answers questions about Genuary and generative art
- Hidden easter eggs (42, pizza, secrets...)

**Technologies**: RiveScript (no-AI chatbot)

## Interactions

- **Day 29**: Click to evolve creatures to the next generation
- **GenBot**: Chat to learn about the projects

## Credits

Created for the Genuary 2026 challenge with the assistance of **Claude** (Anthropic).

`#genuary #genuary2026`
