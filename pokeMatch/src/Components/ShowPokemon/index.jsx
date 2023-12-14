import React, { useState, useEffect } from 'react'
import PokeCard from '../PokeCard'

const ShowPokemon = () => {
    const [pokemon, setPokemon] = useState([])
    let [choice1, setChoice1] = useState()
    let [choice2, setChoice2] = useState()
    let [choiceCount, setChoiceCount] = useState(0)
    let [points, setPoints] = useState(0)

    async function fetchPokemon(){
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await response.json()
        console.log(data.results)
        setPokemon(data.results)
        // console.log(pokemon)
    }
    function displayCards(){
        return pokemon
            .slice(0,9)
            .map(
                p => 
                <PokeCard key={p.name} name={p.name} choice1={choice1} setChoice1={setChoice1} choice2={choice2} setChoice2={setChoice2} choiceCount={choiceCount}/>,
                )
    }
    function compareChoice(){
        setChoiceCount(0)
        if (choice1 === choice2){
            setPoints(points+1)
        }

    }
    useEffect(()=>{
        fetchPokemon()
    },[])

    useEffect(()=>{
        setChoiceCount(choiceCount+1)
        choiceCount >= 1 ? compareChoice(): ""
        console.log("choice count: "+choiceCount)
        
    }, [choice1, choice2])

  return (
    <>
    <div>Pokemon list</div>
    <p>Score: {points}</p>
    <div className="cardContainer">{displayCards()}</div>
    </>

  )
}

export default ShowPokemon
