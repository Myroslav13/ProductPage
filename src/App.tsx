import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation></Navigation>
      <Product></Product>
    </>
  )
}

export default App
