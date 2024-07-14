const gradients = [
  'orange-text-gradient',
  'green-text-gradient',
  'blue-text-gradient',
  'pink-text-gradient',
  'violet-text-gradient',
  'cyan-text-gradient',
  'purple-text-gradient',
  'red-text-gradient',
  'teal-text-gradient',
  'yellow-text-gradient',
  'gold-text-gradient',
  'silver-text-gradient',
  'peach-text-gradient',
  'lime-text-gradient',
  'sapphire-text-gradient',
  'mint-text-gradient',
  'magenta-text-gradient',
  'sky-text-gradient',
  'bronze-text-gradient',
  'amethyst-text-gradient',
  'coral-text-gradient',
  'turquoise-text-gradient',
];

// Function to shuffle the gradients array to add more randomness
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const stringToHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

const hashToGradientClass = (hash) => {
  const shuffledGradients = shuffleArray([...gradients]); // Shuffle gradients for each hash call
  return shuffledGradients[Math.abs(hash) % shuffledGradients.length];
};

const getGradientClassFromString = (str) => {
  const hash = stringToHash(str);
  return hashToGradientClass(hash);
};

export { getGradientClassFromString };
