
import './assets/sass/app.sass'
import Item from './components/item'

function App() {
  const itemList = [
    {uid: 'F-njf8934234d', name: 'Blueberryneon', rarity: 1},
    {uid: 'C-totogbjo433', name: 'Neondragon', rarity: 4},
    {uid: 'A-ggdg3gsdffb', name: 'Neonturtle', rarity: 6},
    {uid: 'E-2h3hhvnzhnh', name: 'Spironeon', rarity: 2},
    {uid: 'F-djdgofjhi70', name: 'Dolpino Sparke', rarity: 1},
  ]
  return (
    <div className="App">
      <Item items={itemList}/>
    </div>
  )
}

export default App

const generatedneonmons = [
  {uid: 'njf8934234d', userid: 'firebasecollectionid', neonid: 100, rarity: 1 }, 
] 

const neonmons = [
  {id: 100, name: 'Blueberryneon' }
]

const neonrarities = [
  {id: 1, name: 'gold' }
  {id: 2, name: 'silver' }
]