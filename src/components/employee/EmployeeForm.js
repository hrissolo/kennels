import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import "./Employee.css"
import { useHistory, useParams } from 'react-router-dom';
import {EmployeeContext} from "./EmployeeProvider"

export const EmployeeForm = () => {
    const { addEmployee, getEmployeeById, updateEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)


    //for edit, hold on to state of animal in this view
    const [employee, setEmployee] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {employeeId} = useParams();
	const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newEmployee = { ...employee }
        //animal is an object with properties. 
        //set the property to the new value
        newEmployee[event.target.name] = event.target.value
        //update state
        setEmployee(newEmployee)
    }
    
    // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
        getLocations().then(()=> {
            if (employeeId){
                getEmployeeById(employeeId)
                .then(employee => {
                    setEmployee(employee)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
       })
    }, [])

    const constructEmployeeObject = () => {
        if (parseInt(employee.locationId) === 0) {
            window.alert("Please assign to a location")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (employeeId){
                //PUT - update
                updateEmployee({
                    id: employee.id,
                    name: employee.name,
                    locationId: parseInt(employee.locationId)
                })
                .then(() => history.push(`/employees/detail/${employee.id}`))
            }else {
                //POST - add
                addEmployee({
                    name: employee.name,
                    locationId: parseInt(employee.locationId)
                })
                .then(() => history.push("/employees"))
            }
        }
    }
    
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">Edit Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" name="name" required autoFocus className="form-control" 
                    placeholder="employee name" 
                    onChange={handleControlledInputChange} 
                    defaultValue={employee.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select value={employee.locationId} name="locationId" id="employeeLocation" className="form-control" onChange={handleControlledInputChange}>
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructEmployeeObject()
                }}>
            {employeeId ? <>Save Employee</> : <>Add Employee</>}</button>
        </form>
    )
}