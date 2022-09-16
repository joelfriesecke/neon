import InventoryList from './InventoryList'

function Inventory() {
    return (
      <div className="max-w-screen-xl mx-auto">
        <div className="flex">Zufalls Int {generateNeon()}</div>
        <div className="grid gap-10 md: grid-cols-4">
          <InventoryList />
        </div>
      </div>
    );
}
export default Inventory

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