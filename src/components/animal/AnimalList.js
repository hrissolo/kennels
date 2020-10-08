import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import {useHistory} from "react-router-dom"

export const AnimalList = () => {
   // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
    const history = useHistory()
    
    const [ filteredAnimals, setFiltered ] = useState([])

	//useEffect - reach out to the world for something
    useEffect(() => {
		getAnimals()
		
    }, [])

    useEffect(() => {
      if (searchTerms !== "") {
          // If the search field is not blank, display matching animals
          const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
          setFiltered(subset)
      } else {
          // If the search field is blank, display all animals
          setFiltered(animals)
      }
    }, [searchTerms, animals])
  
    return (
      <>
          <h1>Animals</h1>

          <button onClick={() => history.push("/animals/create")}>
              Add Animal
          </button>
          <div className="animals">
      {
      filteredAnimals.map(animal => {
        return <AnimalCard key={animal.id} animal={animal} />
      })
      }
    </div>
      </>
  )
}