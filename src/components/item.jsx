import React from 'react'

//rarity: 1 - F, 2 - E, 3 - D, 4 - C, 5 - B, 6 - A
function Item(props) {
  const listItems = props.items.map((item, key) => (
    <div key={key} id={'item-'+item.id}>
      <p>{item.name}</p>
    </div>
  ));
  return (
    <div className="itemList">
      {listItems}
    </div>
  );
}

export default Item