import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"
import {useHistory} from "react-router-dom"

export const EmployeeList = () => {
   // This state changes when `getEmployees()` is invoked below
    const { employee, getEmployees } = useContext(EmployeeContext)
    const history = useHistory()
    

	//useEffect - reach out to the world for something
    useEffect(() => {
		getEmployees()
		
    }, [])


    return (	

      <>
      <h2>Employees</h2>
          <button onClick={() => {history.push("/employees/create")}}>
              New Employee
          </button>

		<div className="employees">
		    {console.log("EmployeeList: Render")}
        {
			employee.map(employee => {
				return <EmployeeCard key={employee.id} locationId={employee.location.name} name={employee.name} />
			})
        }
        </div>
      </>
    )
}