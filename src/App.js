import FruitsIndex from './components/FruitsIndex'
import fruits from './mockData/fruits.json'
import FruitForm from './components/FruitForm'

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      <FruitsIndex fruits={fruits}/>
      <FruitForm fruits={fruits}/>
    </>
  );
}

export default App;