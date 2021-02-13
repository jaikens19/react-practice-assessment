import { NavLink } from 'react-router-dom'
import { useFavFruit } from '../context/FavFruitContext'

const FavoriteFruit = ( {fruits} ) => {
  const { favFruitId } = useFavFruit()
  const favFruit = fruits.find(fruit => fruit.id === favFruitId)
  
if(favFruit){
  return (
    <div className="fav-fruit">
      <h2>Favorite Fruit</h2>
      <NavLink to={`/fruits/${favFruitId}`}>{favFruit ? favFruit.name : 'none'}</NavLink>
    </div>
  )

} else {
  return (
  <>
  </>

  )
}
}

export default FavoriteFruit;
