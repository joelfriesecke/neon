import { React, useEffect, useState } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase-config';
function InventoryItem(props) {

  const [tierList, setTierList] = useState([]);

  useEffect(() => {
      const tierCollection = async () => {
      try {
          const querySnapshot = await getDoc(doc(db, "tiers", props.item.rarityId));
              setTierList(
                querySnapshot.data()
              );
      } catch (error) {
          console.log(error);
      }
      }
      tierCollection()
  }, []);
  console.log(tierList)
  return (
    <div className="neon flex flex-col p-4 text-white text-xl font-bold justify-center w-max rounded-lg">
      <div> <span className='text-sm text-gray-200 font-base'>Name: </span>{props.item.nameId}</div>
       <div><span className='text-sm text-gray-200 font-base'>Seltenheit: </span>{props.item.rarityId}</div>
     {/* <div> <span className='text-sm text-gray-200 font-base'>Name: </span>{props.item.nameId}</div>
       <div><span className='text-sm text-gray-200 font-base'>Seltenheit: </span>{getRarity(props.item.rarityId).name}</div>  */}
    </div>
  );
}

export default InventoryItem

function getName(nameId) {
  return tierList.neons.find(x => x.id === nameId);
}

function getColor(colorId) {
  return colors.find(x => x.id === colorId);
}

function getRarity(rarityId) {
  return neonCollection.find(x => x.id === rarityId);
}

/* const neonCollection = [
  {
    id: 'KFlXN6Be1F75WfPjAwjQ',
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
] */