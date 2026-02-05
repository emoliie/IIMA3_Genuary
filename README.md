# Genuary 2026

31 jours de création générative en p5.js pour le challenge [Genuary](https://genuary.art/).

**Réalisé avec l'aide de Claude (Anthropic)**

## Prompts et créations

| Jour | Prompt | Description | Type |
|------|--------|-------------|------|
| 01 | Une couleur, une forme | Spirale carrée minimaliste | Statique |
| 02 | Les 12 principes de l'animation | Balle rebondissante avec squash & stretch | Animé |
| 03 | Suite de Fibonacci | Spirale dorée avec carrés et arcs | Statique |
| 04 | Basse résolution | Cercle pixelisé qui pulse | Animé |
| 05 | Écrire "Genuary" sans police | Lettres dessinées avec des lignes et arcs | Statique |
| 06 | Lumières allumées/éteintes | Grille de lumières avec effet de vagues | Animé |
| 07 | Algèbre booléenne | Motif XOR sur grille 16x16 | Statique |
| 08 | Métropole générative | Skyline de nuit avec fenêtres illuminées | Statique |
| 09 | Automates cellulaires | Règle 110 de Wolfram en couleurs | Animé |
| 10 | Coordonnées polaires | Roses polaires animées | Animé |
| 11 | Quine | Code source affiché en spirale | Statique |
| 12 | Uniquement des boîtes | Subdivision récursive de rectangles | Statique |
| 13 | Autoportrait génératif | Visage stylisé avec formes géométriques | Statique |
| 14 | Tout s'adapte parfaitement | Circle packing | Statique |
| 15 | Objet invisible (ombres) | Formes révélées par leurs ombres | Animé |
| 16 | Ordre et désordre | Grille qui se désorganise de gauche à droite | Statique |
| 17 | Papier peint | Carreaux géométriques style marocain | Statique |
| 18 | Chemin inattendu | Marche basée sur règle pair/impair | Animé |
| 19 | 16x16 | Grille de symboles aléatoires | Statique |
| 20 | Une seule ligne | Courbe de Hilbert | Statique |
| 21 | Style Bauhaus | Affiche géométrique | Statique |
| 22 | Traceur à plume | Dessin optimisé pour plotter | Statique |
| 23 | Transparence | Cercles RGB superposés | Statique |
| 24 | Cauchemar du perfectionniste | Grille parfaite avec un seul défaut | Statique |
| 25 | Géométrie organique | Blobs avec bruit de Perlin | Animé |
| 26 | Grilles récursives | Subdivision récursive | Statique |
| 27 | Forme en croissance | Arbre fractal qui pousse | Animé |
| 28 | HTML uniquement | Animation CSS pure (pas de JS) | Animé |
| 29 | Évolution génétique | Créatures avec mutations | Animé/Interactif |
| 30 | Ce n'est pas un bug | Glitch art intentionnel | Animé |
| 31 | GLSL Shaders | Effet plasma en shader | Animé |

## Comment voir les sketches

### Galerie principale

Ouvrir `index.html` à la racine du projet avec **Live Server** (VS Code) pour voir tous les sketches dans une galerie interactive :
- Aperçu en miniature de chaque sketch
- Cliquer pour ouvrir en grand avec navigation (précédent/suivant)
- Navigation au clavier : `←` `→` pour naviguer, `Échap` pour fermer

### Lancer le projet

1. Ouvrir le dossier `genuary` dans VS Code
2. Clic droit sur `index.html` → "Open with Live Server"
3. Ou utiliser un serveur local : `python3 -m http.server 8000`

```
genuary/
├── index.html      ← Galerie principale
├── 01/index.html
├── 02/index.html
├── ...
└── 31/index.html
```

## Technologies

- **p5.js** (via CDN) pour les jours 01-27 et 29-31
- **CSS pur** pour le jour 28
- **WebGL/GLSL** pour le jour 31

## Interactions

- **Jour 29** : Cliquer pour faire évoluer les créatures vers la génération suivante

## Crédits

Créé pour le challenge Genuary 2026 avec l'assistance de **Claude** (Anthropic).

`#genuary #genuary2026`
