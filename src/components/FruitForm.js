import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {
  const [name, setName] = useState('')
  const [sweetness, setSweetness] = useState(1)
  const [color, setColor] = useState(COLORS[0])
  const [seeds, setSeeds] = useState('yes')
  const [errors, setErrors] = useState([])
  const history = useHistory()

  useEffect(() => {
    const errors = []
    if(name.length < 3){
      errors.push("Name must be 3 or more characters")
    }
    if(name.length > 20){
      errors.push("Name must be 20 characters or less")
    }
    const fruitNames = fruits.map(fruit => fruit.name)
    if (fruitNames.includes(name)){
      errors.push("Name already exists")
    }
    if(sweetness < 1 || sweetness > 10){
      errors.push("Sweetness must be between 1 and 10")
    }
    setErrors(errors)
  }, [name, fruits, sweetness])
  

  const onSubmit = (event) => {
    event.preventDefault()
    console.log({ name, sweetness, color, seeds })
  
    history.push('/')

  }

  return (
    <form className="fruit-form" onSubmit={onSubmit}>
      <h2>Enter a Fruit</h2>
      <ul className="errors">
        {errors.map(error => (
          <li key={error}>
            {error}
          </li>
        ))}
      </ul>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Select a Color
        <select 
          value={color}
          onChange={(event) => setColor(event.target.value)}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          value={sweetness}
          onChange={(event) => setSweetness(event.target.value)}
        />
      </label>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          checked={seeds === 'no' ? true : false}
          onChange={(event) => setSeeds(event.target.value)}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          checked={seeds === 'yes' ? true : false}
          onChange={(event) => setSeeds(event.target.value)}
        />
        Seeds
      </label>
      <button type="submit" disabled={errors.length > 0 ? true : false}>Submit Fruit</button>
    </form>
  );
}

export default FruitForm;