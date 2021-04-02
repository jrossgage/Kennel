import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { LocationCard } from "./Location/Location"
import { CustomerCard } from "./Customer/Customer"
import { EmployeeCard } from "./Employee/Employee"

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
              <AnimalCard />
            </Route>

            <Route path="/locations">
            <h2>Locations</h2>
            <LocationCard />
            </Route>

            <Route path="/customers">
            <h2>Customers</h2>
            <CustomerCard />
            </Route>

            <Route path="/employees">
            <h2>Employees</h2>
            <EmployeeCard />
            </Route>
        </>
    )
}