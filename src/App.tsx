import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Product from './components/Product'

function App() {
  const [countItems, setCountItems] = useState(0)
  const [addToCart, setAddToCart] = useState(false)
  
  return (
    <>
      <Navigation countItems={countItems} addToCart={addToCart} setCountItems={setCountItems} setAddToCart={setAddToCart}></Navigation>
      <Product countItems={countItems} setCountItems={setCountItems} setAddToCart={setAddToCart}></Product>
    </>
  )
}

export default App
