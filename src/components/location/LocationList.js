import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
   // This state changes when `getLocations()` is invoked below
    const { location, getLocations } = useContext(LocationContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		getLocations()
		
    }, [])


    return (	
		<div className="locations">
		    {console.log("LocationList: Render")}
        {
			location.map(location => {
				return <LocationCard key={location.id} location={location.address} location={location} />
			})
        }
        </div>
    )
}