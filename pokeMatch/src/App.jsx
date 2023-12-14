import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from "react-router-dom"
import './App.css'
import { HomePage, MatchGame } from './Pages'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/game" element={<MatchGame/>}/>
    </Routes>
    </>
  )
}

export default App
