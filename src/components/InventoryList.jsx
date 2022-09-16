import InventoryItem from './InventoryItem'
function InventoryList() {
    const neons = [
        {uid: 'A-njf8934234d', userid: 'firebasecollectionid', nameId: 100, rarityId: 10},
        {uid: 'A-njf8934234d', userid: 'firebasecollectionid', nameId: 201, rarityId: 20},
      ]
    return (
        <InventoryItem items={neons}/>
    )
}
export default InventoryList