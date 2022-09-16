
import './assets/sass/app.sass'
import Item from './components/item'

function App() {
  const itemList = [
    {uid: 'njf8934234d', userid: 'firebasecollectionid', nameId: 101, collectionId: 300},
  ]
  return (
    <div className="App">
      <Item items={itemList}/>
    </div>
  )
}

export default App

