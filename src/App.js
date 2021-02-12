import fruits from "./mockData/fruits.json";
import FruitsIndex from './components/FruitsIndex'

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      <FruitsIndex fruits={fruits}/>
    </>
  );
}

export default App;
