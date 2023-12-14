import React from 'react'
import {Link} from "react-router-dom"
import { ShowPokemon } from '../../Components'

const MatchGame = () => {
  return (
    <>
     <h2>MatchGame</h2>
     <Link to="/">Home</Link>
     <ShowPokemon/>
    </>
  )
}

export default MatchGame
