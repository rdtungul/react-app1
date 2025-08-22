import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Roseph Darl</h1>
          <a href="https://rosephdarl.netlify.app/" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        <h2 className='text-white'>Visit website ↑↑↑</h2>
        </a>

      </div>
    </>
  )
}

export default App
