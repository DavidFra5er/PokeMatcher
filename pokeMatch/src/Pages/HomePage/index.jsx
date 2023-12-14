import React from 'react'
import {Link} from "react-router-dom"
const HomePage = () => {
  return (
    <>
        <h1>Welcome to the Pokemon API matching game!!!</h1>
        <Link to="/game"> New Game </Link>
    </>

  )
}

export default HomePage
