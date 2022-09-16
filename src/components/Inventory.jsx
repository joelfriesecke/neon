import InventoryList from './InventoryList'

function Inventory() {
    console.log(generateTier().item.name);
    return (
      <div className="max-w-screen-xl mx-auto">
        <div className="flex"></div>
        <div className="grid gap-10 md: grid-cols-4">
          <InventoryList />
        </div>
      </div>
    );
}

export default Inventory

function generateTier() {
  const weights = neonCollection.map((item) => (
    item.prob
  ));
  return weightedRandom(neonCollection, weights);
}

function weightedRandom(items, weights) {
  if (items.length !== weights.length) {
    throw new Error('Items and weights must be of the same size');
  }

  if (!items.length) {
    throw new Error('Items must not be empty');
  }

  // Preparing the cumulative weights array.
  // For example:
  // - weights = [1, 4, 3]
  // - cumulativeWeights = [1, 5, 8]
  const cumulativeWeights = [];
  for (let i = 0; i < weights.length; i += 1) {
    cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
  }

  // Getting the random number in a range of [0...sum(weights)]
  // For example:
  // - weights = [1, 4, 3]
  // - maxCumulativeWeight = 8
  // - range for the random number is [0...8]
  const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
  const randomNumber = maxCumulativeWeight * Math.random();

  // Picking the random item based on its weight.
  // The items with higher weight will be picked more often.
  for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
    if (cumulativeWeights[itemIndex] >= randomNumber) {
      return {
        item: items[itemIndex],
        index: itemIndex,
      };
    }
  }
}

const neonCollection = [
  {
    id: 10,
    name: 'Diamond',
    prob: 0.1,
    neons: [
      {id: 100, name: 'Blueberryneon'},
      {id: 101, name: 'Neondragon'},
    ]
  },
  {
    id: 20,
    name: 'Gold',
    prob: 0.3,
    neons: [
      {id: 200, name: 'Neonturtle'},
      {id: 201, name: 'Dolpino Sparkle'},
      {id: 202, name: 'Spironeon'},
    ]
  },
  {
    id: 30,
    name: 'Silver',
    prob: 0.6,
    neons: [
      {id: 300, name: 'Neonjoel'},
      {id: 301, name: 'Dolpino Lorenz'},
      {id: 302, name: 'Pingu'},
    ]
  },
]