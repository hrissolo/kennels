import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"
import { useHistory } from "react-router-dom"

export const LocationList = () => {
   // This state changes when `getLocations()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)
    const history = useHistory()
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		getLocations()
		
    }, [])


    return (	
      <>

      <h2>Locations</h2>
          <button onClick={() => {history.push("/locations/create")}}>
              New Location
          </button>


		<div className="locations">
		    {console.log("LocationList: Render")}
        {
			locations.map(location => {
				return <LocationCard key={location.id} location={location} />
			})
        }
        </div>

        </>
    )
}