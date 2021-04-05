import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./Location/LocationList"
import { CustomerList } from "./Customer/CustomerList"
import { EmployeeList } from "./Employee/EmployeeList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
            <h2>Animals</h2>
              <AnimalList />
            </Route>

            <Route path="/locations">
            <h2>Locations</h2>
            <LocationList />
            </Route>

            <Route path="/customers">
            <h2>Customers</h2>
            <CustomerList />
            </Route>

            <Route path="/employees">
            <h2>Employees</h2>
            <EmployeeList />
            </Route>
        </>
    )
}