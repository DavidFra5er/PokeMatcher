import React, {useState, useEffect} from 'react'

const PokeCard = ({name, choice1, setChoice1, choice2, setChoice2, choiceCount}) => {
    const [thisPokemon, setThisPokemon] = useState([])
    const [reveal, setReveal] = useState(false)

    async function fetchThisPokemon(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        console.log(data)
        setThisPokemon(data)
    }
    function revealCard(){
        console.log(thisPokemon.name)
        setReveal(!reveal)
        choiceCount === 0 ? setChoice1(thisPokemon.name): setChoice2(thisPokemon.name)
        
        console.log("fist choice: "+choice1)
        console.log("second choice: "+choice2)
        setTimeout(() => {
            setReveal(reveal => !reveal)
        }, 1000)
    }
    useEffect(()=>{
        fetchThisPokemon()
        fetchThisPokemon()
    },[])


  return (
    <div className="pokeCard">
        {(reveal ? 
        <>
            <div >{thisPokemon.name}</div>
            <img src={thisPokemon.sprites.front_default} alt={`${thisPokemon.name} image`} /> 
        </>: <p onClick={revealCard}>Reveal</p>)
        }
    </div>
  )
}

export default PokeCard
