import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
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
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { AnimalEditForm } from "./animal/AnimalEditForm"
import { CustomerEditForm } from "./Customer/CustomerEditForm"
import { LocationEditForm } from "./Location/LocationEditForm"
import { EmployeeEditForm } from "./Employee/EmployeeEditForm"


export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {
  
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                <h2>Animals</h2>
                {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
             {isAuthenticated ? <AnimalEditForm /> : <Redirect to="/login" />}
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            <Route exact path="/locations">
                <h2>Locations</h2>
                {isAuthenticated ? <LocationList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            <Route path="/locations/:locationId(\d+)/edit">
             {isAuthenticated ? <LocationEditForm /> : <Redirect to="/login" />}
            </Route>

            <Route path="/locations/create">
                <LocationForm />
            </Route>

            <Route exact path="/customers">
                <h2>Customers</h2>
                {isAuthenticated ? <CustomerList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/customers/:customerId(\d+)/edit">
             {isAuthenticated ? <CustomerEditForm /> : <Redirect to="/login" />}
            </Route>

            <Route path="/customers/create">
                <CustomerForm />
            </Route>

            <Route exact path="/employees">
                <h2>Employees</h2>
                {isAuthenticated ? <EmployeeList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/employees/:employeeId(\d+)/edit">
             {isAuthenticated ? <EmployeeEditForm /> : <Redirect to="/login" />}
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
        </>
    )
}