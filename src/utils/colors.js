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

// Function to hash a string into an index for the gradient array
const stringToHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

const hashToGradientClass = (hash) => {
  return gradients[Math.abs(hash) % gradients.length];
};

const getGradientClassFromString = (str) => {
  const hash = stringToHash(str);
  return hashToGradientClass(hash);
};

export { getGradientClassFromString };
