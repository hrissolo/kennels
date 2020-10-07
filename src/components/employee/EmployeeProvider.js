import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const EmployeeContext = createContext()

/*
 This component establishes what data can be used.
 */
export const EmployeeProvider = (props) => {
    const [employee, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
            .then(res => res.json())
            .then(setEmployees)
    }

    const addEmployees = employee => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
            .then(getEmployees)
    }

    const getEmployeeById = (id) => {
        return fetch(`http://localhost:8088/employees/${id}?_expand=location`)
            .then(res => res.json())
    }

    const releaseEmployee = (id) => {
        return fetch(`http://localhost:8088/employees/${id}`, {
        method: "DELETE"
        })
        .then(getEmployees)
    }

    /*
        You return a context provider which has the
        `employees` state, the `addEmployee` function,
        and the `getEmployee` function as keys. This
        allows any child elements to access them.
    */
    return (
        <EmployeeContext.Provider value={{
            employee, getEmployees, addEmployees, getEmployeeById, releaseEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}