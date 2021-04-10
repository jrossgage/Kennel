import React from "react"
import "./Location.css";
import { Link, useHistory } from "react-router-dom";


export const LocationCard = ({ location, handleDeleteLocation }) => {
    const history = useHistory()
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-locationname">
                    {location.name}
                </span></h3>
                <p>Company: {location.address}</p>
                <button type="button" onClick={() => handleDeleteLocation(location.id)}>Delete</button>
                <Link to={`/locations/${location.id}`}>
                    <button>Details</button>
                </Link>
            </div>

            <button type="button"
                onClick={() => history.push(`/locations/${location.id}/edit`)}>
                Edit
        </button>

        </div>
    );
}