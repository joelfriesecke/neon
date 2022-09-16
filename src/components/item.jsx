import React from 'react'

//rarity: 1 - F, 2 - E, 3 - D, 4 - C, 5 - B, 6 - A
function Item(props) {
  const listItems = props.items.map((item, key) => (
    <div key={key} id={'item-'+item.id}>
      <p>Name: {getName(item.name)}</p>
      <p>Rarity: {getColor(item.color)}</p>
      <p>Color: {getRarity(item.rarity)}</p>
      <hr />
    </div>
  ));
  return (
    <div className="itemList">
      {listItems}
    </div>
  );
}

export default Item

function getName(nameId) {
  return names.find(x => x.id === nameId).name;
}

function getColor(colorId) {
  return colors.find(x => x.id === colorId).name;
}

function getRarity(rarityId) {
  return rarities.find(x => x.id === rarityId).name;
}

const names = [
  {id: 100, name: 'Blueberryneon'},
  {id: 101, name: 'Neondragon'},
  {id: 102, name: 'Neonturtle'},
  {id: 104, name: 'Dolpino Sparke'},
  {id: 105, name: 'Spironeon'},
]

const colors = [
  {id: 200, name: 'White', hex: 'ffffff'},
  {id: 201, name: 'Green', hex: '00ff00'},
  {id: 202, name: 'Blue', hex: '0000ff'},
]

const rarities = [
  {id: 300, name: 'diamond' },
  {id: 301, name: 'gold' },
  {id: 302, name: 'silver' },
  {id: 303, name: 'bronze' },
]