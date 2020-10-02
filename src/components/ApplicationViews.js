import React from "react";
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomerCard } from "./customer/CustomerCard"
import { LocationCard } from "./location/LocationCard"
import { EmployeeCard } from "./employee/EmployeeCard"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animal">
                <AnimalCard />
            </Route>

            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/location">
                <LocationCard />
            </Route>

            {/* Render the customer list when http://localhost:3000/customers */}
            <Route path="/customer">
                <CustomerCard />
            </Route>

            {/* Render the employee list when http://localhost:3000/employees */}
            <Route path="/employee">
                <EmployeeCard />
            </Route>
        </>
    )
}