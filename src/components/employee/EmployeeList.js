import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
   // This state changes when `getEmployees()` is invoked below
    const { employee, getEmployees } = useContext(EmployeeContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		getEmployees()
		
    }, [])


    return (	
		<div className="employees">
		    {console.log("EmployeeList: Render")}
        {
			employee.map(employee => {
				return <EmployeeCard key={employee.id} location={employee.location.name} name={employee.name} />
			})
        }
        </div>
    )
}