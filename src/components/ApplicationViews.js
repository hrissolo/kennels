import React from "react";
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { LocationProvider } from "./location/LocationProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { LocationList } from "./location/LocationList"
import {EmployeeList} from "./employee/EmployeeList"
import {EmployeeProvider} from "./employee/EmployeeProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <AnimalProvider>
                <Route exact path="/animal">
                    <AnimalList />
                </Route>
            </AnimalProvider> 

            {/* Render the location list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route path="/location">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* Render the customer list when http://localhost:3000/customers */}
            <CustomerProvider>
                <Route path="/customer">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            {/* Render the employee list when http://localhost:3000/employees */}
            <EmployeeProvider>
                <Route path="/employee">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
}