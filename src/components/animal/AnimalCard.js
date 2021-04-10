import React from "react";
import "./Animal.css";
import { Link, useHistory } from "react-router-dom";

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {

const history = useHistory()
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-petname">
          {animal.name}
        </span></h3>
        <p>Breed: {animal.breed}</p>
        <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>

        <Link to={`/animals/${animal.id}`}>
          <button>Details</button>
        </Link>

        <button type="button"
          onClick={() => history.push(`/animals/${animal.id}/edit`)}>
          Edit
        </button>

      </div>
    </div>
  );
}