import InventoryList from './InventoryList'

function Inventory() {
  const test = [];
  for (let i = 0; i < 100; i++) {
    test.push(generateNeon().item.name);
  }
    console.log(test);
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

function generateNeon() {
  const tiersWeight = neonCollection.map((tiers) => (
    tiers.prob
  ));
  const tierItem = weightedRandom(neonCollection, tiersWeight);
  const neonsWeight = tierItem.item.neons.map((neons) => (
    neons.prob
  ));
  const neons = tierItem.item.neons;
  return weightedRandom(neons, neonsWeight)
}

function weightedRandom(items, weights) {
  if (items.length !== weights.length) {
    throw new Error('Items and weights must be of the same size');
  }

  if (!items.length) {
    throw new Error('Items must not be empty');
  }

  const cumulativeWeights = [];
  for (let i = 0; i < weights.length; i += 1) {
    cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
  }

  const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
  const randomNumber = maxCumulativeWeight * Math.random();

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
      {id: 100, name: 'Blueberryneon', prob: 0.2},
      {id: 101, name: 'Neondragon', prob: 0.8},
    ]
  },
  {
    id: 20,
    name: 'Gold',
    prob: 0.3,
    neons: [
      {id: 200, name: 'Neonturtle', prob: 0.2},
      {id: 201, name: 'Dolpino Sparkle', prob: 0.3},
      {id: 202, name: 'Spironeon', prob: 0.5},
    ]
  },
  {
    id: 30,
    name: 'Silver',
    prob: 0.6,
    neons: [
      {id: 300, name: 'Neonjoel', prob: 0.3},
      {id: 301, name: 'Dolpino Lorenz', prob: 0.3},
      {id: 302, name: 'Pingu', prob: 0.3},
    ]
  },
]