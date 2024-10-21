import { useState } from 'react'
import { FaQuoteLeft, FaQuoteRight, FaTwitter } from 'react-icons/fa'

import './App.css'
import quotes from './assets/quotes.json'

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function App() {
  const [quote, setQuote] = useState(getRandomQuote())
  const [color, setColor] = useState(getRandomColor())
  const changeQuote = () => {
    setQuote(getRandomQuote())
    setColor(getRandomColor())
  }
  return (
    <div className='container' style={{backgroundColor: color}}>
      <div id='quote-box'>
        <div className='quote-content'>
        <div id='text'>
          <FaQuoteLeft />
          <h1>{quote.quote}</h1>
          <FaQuoteRight />
        </div>
        <div id='author'>
          {quote.author}
        </div>
        </div>
        <div className='buttons'>
        <a 
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`} 
        id='tweet-quote'
        target='_blank'
        style={{
          backgroundColor: color,
          marginRight: '10px',
        }}
        >
        <FaTwitter color='white'/>
        </a>
        <button id='new-quote' onClick={changeQuote}>New Quote</button>
        </div>
      </div>
    </div>
  )
}

export default App
