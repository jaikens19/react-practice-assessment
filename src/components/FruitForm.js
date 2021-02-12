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



  let history = useHistory()
  const onSubmit = (e) => {
    e.preventDefault()
    console.log({ name, sweetness, color, seeds })
      history.push('/')
  }

  return (
    <form className="fruit-form" onSubmit={onSubmit}>
      <h2>Enter a Fruit</h2>
      <ul className="errors">
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
          onChange={(event) => setSeeds(event.target.value)}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          onChange={(event) => setSeeds(event.target.value)}
        />
        Seeds
      </label>
      <button type="submit">Submit Fruit</button>
    </form>
  );
}

export default FruitForm;