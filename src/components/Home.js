import React, { useState, useEffect } from "react";
import { PropsAndState } from './PropsAndState'
import { AnimalCard } from "./animal/AnimalCard"
import { EmployeeCard } from "./Employee/Employee"
import { LocationCard } from "./Location/Location"
import { CustomerCard } from "./Customer/Customer"
import "./animal/Animal.css"
import { getRandomId } from "../modules/AnimalManager"
import { AnimalSpotlight } from "./animal/AnimalSpotlight"

export const Home = () =>{

    const [spotlightId, setSpotlightId] = useState(0);

    const refreshSpotlightAnimal = () => {
      getRandomId().then(setSpotlightId);
    };
  
    useEffect(() => {
      refreshSpotlightAnimal();
    }, []);

    return ( 
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }

        <PropsAndState yourName="Joel" />
    </>
)}