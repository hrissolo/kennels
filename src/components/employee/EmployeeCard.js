import React from "react"
import "./Employee.css"

export const EmployeeCard = ( employees ) => (
    <section className="employee">
        <h3 className="employee__name">{employees.name}</h3>
        <div className="employee__location">{employees.location}</div>
    </section>
)

