
import './assets/sass/app.sass'
import Item from './components/item'

function App() {
  const itemList = [
    {uid: 'njf8934234d', userid: 'firebasecollectionid', name: 101, color: 202, rarity: 301}, 
  ]
  return (
    <div className="App">
      <Item items={itemList}/>
    </div>
  )
}

export default App