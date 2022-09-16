import { React } from 'react'

function InventoryItem(props) {
/*   console.log('name: ' + props.item.nameId + 'rarityId:' + props.item.rarityId); */
  return (
    <div className="neon flex flex-col p-4 text-white text-xl font-bold justify-center w-max rounded-lg">
       <div> <span className='text-sm text-gray-200 font-base'>Name: </span>{getName(props.item.rarityId, props.item.nameId).name}</div>
        <div><span className='text-sm text-gray-200 font-base'>Seltenheit: </span>{getRarity(props.item.rarityId).name}</div> 
    </div>
  );
}

export default InventoryItem

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