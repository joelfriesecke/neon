import { React } from 'react'

function InventoryItem({items}) {

  const listItems = items.map((item, key) => (
      <div key={key} id={"item-" + item.uid} className="item flex flex-col p-4 text-white text-xl font-bold justify-center w-max rounded-lg">
        <div> <span className='text-sm text-gray-200 font-base'>Name: </span>{getName(item.rarityId, item.nameId).name}</div>
        <div><span className='text-sm text-gray-200 font-base'>Seltenheit: </span>{getRarity(item.rarityId).name}</div>
      </div>
  ));
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className="flex">Zufalls Int {generateNeon()}</div>
      <div className="grid gap-10 md: grid-cols-4">
        {listItems}
      </div>
    </div>
  );
}

export default InventoryItem

function generateNeon() {
  const randTier = Math.round(Math.random() * 100);
  const randName = Math.round(Math.random() * 100);
  let rarityId;
  let nameId;

  // a-tier
  if(randTier <= 1) {
    rarityId = 10;
    if(randName <= 20) {
      nameId = 100;
    }
    else {
      nameId = 101;
    }
  // b-tier
  } else if(randName > 1 && randName <= 50) {
    rarityId = 20;
    if(randName <= 20) {
      nameId = 200;
    }
    else if (randName > 20 && randName < 60) {
      nameId = 201;
    } else {
      nameId = 202;
    }
  // c-tier
  } else {
    rarityId = 30;
    if(randName <= 40) {
      nameId = 300;
    }
    else if (randName > 40 && randName < 70) {
      nameId = 301;
    } else {
      nameId = 302;
    }
  }
  return [rarityId, nameId];
}

function getName(rarityId, nameId) {
  const tiers = neonCollection.find(x => x.id === rarityId);
  return tiers.neons.find(x => x.id === nameId);
}

function getColor(colorId) {
  return colors.find(x => x.id === colorId);
}

function getRarity(rarityId) {
  return neonCollection.find(x => x.id === rarityId);
}

const neonCollection = [
  {
    id: 10,
    name: 'Diamond',
    neons: [
      {id: 100, name: 'Blueberryneon'},
      {id: 101, name: 'Neondragon'},
    ]
  },
  {
    id: 20,
    name: 'Gold',
    neons: [
      {id: 200, name: 'Neonturtle'},
      {id: 201, name: 'Dolpino Sparkle'},
      {id: 202, name: 'Spironeon'},
    ]
  },
  {
    id: 30,
    name: 'Silver',
    neons: [
      {id: 300, name: 'Neonjoel'},
      {id: 301, name: 'Dolpino Lorenz'},
      {id: 302, name: 'Pingu'},
    ]
  },
]

const colors = [
  {id: 200, name: 'White', hex: 'ffffff'},
  {id: 201, name: 'Green', hex: '00ff00'},
  {id: 202, name: 'Blue', hex: '0000ff'},
]