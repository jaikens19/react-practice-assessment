import FruitsIndex from './components/FruitsIndex'
import fruits from './mockData/fruits.json'
import FruitForm from './components/FruitForm'
import FavoriteFruit from './components/FavoriteFruit'

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      <FruitsIndex fruits={fruits}/>
      <FruitForm fruits={fruits}/>
      <FavoriteFruit fruits={fruits}/>
    </>
  );
}

export default App;