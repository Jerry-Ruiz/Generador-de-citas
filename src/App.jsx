import React from 'react'
import { useState } from 'react'
import "./App.css"
import QuoteBox from './components/QuoteBox'
import db from "./db/quotes.json"

const arrayColores = ["#68da3e", "#4fa8fb", "#68da3e", "#00c6ab", "#f86f6f", "#b93af8", "#416864", "#1d3d33", "#20c67a", "#b93af8", "#ff5f7c", "#9dc09d"];

const App = () => {

  const getRandom = (arrayElements) => {
    const quantityValues = arrayElements.length;
    const randomIndex = Math.floor(Math.random() * quantityValues)
    return arrayElements[randomIndex];
  };

  const [quote, setQuote] = useState(getRandom(db));

  const [color, setColor] = useState(getRandom(arrayColores));


  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColores))
  };

  console.log(getRandom(db));

  return (
    <div className='App' style={{backgroundColor: color}}>
      <QuoteBox 
      quote={quote} 
      newQuote={newQuote}
      color={color}
      />
    </div>
  )
}

export default App;