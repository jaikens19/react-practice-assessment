import FruitsIndex from './components/FruitsIndex'
import fruits from './mockData/fruits.json'
import FruitForm from './components/FruitForm'
import FavoriteFruit from './components/FavoriteFruit'
import SetFavoriteFruit from './components/SetFavoriteFruit'

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      <FruitsIndex fruits={fruits}/>
      <FruitForm fruits={fruits}/>
      <SetFavoriteFruit fruits={fruits}/>
      <FavoriteFruit fruits={fruits}/>
    </>
  );
}

export default App;