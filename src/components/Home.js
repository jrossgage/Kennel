import React from "react";
import { PropsAndState } from './PropsAndState'
import { AnimalCard } from "./animal/AnimalCard"
import { EmployeeCard } from "./Employee/Employee"
import { LocationCard } from "./Location/Location"
import { CustomerCard } from "./Customer/Customer"
import "./animal/Animal.css"

export const Home = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <PropsAndState yourName="Joel" />
    </>
)