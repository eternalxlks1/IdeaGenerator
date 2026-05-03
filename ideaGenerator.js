// Arrays of adjectives and nouns. Feel free to change these!
const adjectives = [
  "creative",
  "shiny",
  "mysterious",
  "fuzzy",
  "colorful",
  "wild",
  "brilliant",
  "quirky",
  "dynamic",
  "whimsical",
];

const nouns = [
  "adventure",
  "gadget",
  "creature",
  "planet",
  "idea",
  "machine",
  "character",
  "challenge",
  "puzzle",
  "story",
];

// Function to get a random element from an array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to generate and display an idea
function generateIdea() {
  const adj1 = getRandomElement(adjectives);
  const adj2 = getRandomElement(adjectives);
  const noun = getRandomElement(nouns);

  // Ensure the adjectives are not the same
  const finalAdj2 = adj1 === adj2 ? getRandomElement(adjectives) : adj2;

  const idea = `${adj1} ${finalAdj2} ${noun}`;
  document.getElementById("output").textContent = idea;
}

// Attach event listener to the button
document.getElementById("generateButton").addEventListener("click", generateIdea);
