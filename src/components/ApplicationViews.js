import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./Location/LocationList"
import { CustomerList } from "./Customer/CustomerList"
import { EmployeeList } from "./Employee/EmployeeList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from "./Location/LocationDetail"
import { AnimalForm } from "./animal/AnimalForm";
import { EmployeeForm } from "./Employee/EmployeeForm"
import { CustomerForm } from "./Customer/CustomerForm";
import { LocationForm } from "./Location/LocationForm"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
            <h2>Animals</h2>
              <AnimalList />
            </Route>

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>
            
            <Route exact path="/locations">
            <h2>Locations</h2>
            <LocationList />
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            <Route path="/locations/create">
                <LocationForm />
            </Route>

            <Route exact path="/customers">
            <h2>Customers</h2>
            <CustomerList />
            </Route>

            <Route path="/customers/create">
                <CustomerForm />
            </Route>

            <Route exact path="/employees">
            <h2>Employees</h2>
            <EmployeeList />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
        </>
    )
}