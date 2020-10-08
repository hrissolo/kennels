import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const { releaseLocation, getLocationById } = useContext(LocationContext)
	
    const [location, setLocation] = useState({})
	
	const {locationId} = useParams();
	const history = useHistory();

    useEffect(() => {
		console.log("useEffect", locationId)
        getLocationById(locationId)
        .then((response) => {
			setLocation(response)
		})
			}, [])

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
			<div className="location__location">Location: {location.name}</div>
        
            <button onClick={
            () => {
                releaseLocation(location.id)
                    .then(() => {
                        history.push("/locations")
                    })
            }}>Demolish Location
            </button>

        </section>
    )
}