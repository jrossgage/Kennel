import React, { useState, useEffect } from 'react';
import { getAllLocations, getLocationById, deleteLocation } from '../../modules/LocationManager';
import { LocationCard } from "./Location"
import { useHistory } from "react-router-dom"

export const LocationList = () => {
    const [locations, setLocations] = useState([]);

    const history = useHistory();

    const getLocations = () => {
        return getAllLocations()
            .then(locationsFromAPI => {
                setLocations(locationsFromAPI)
            });
    };

    const handleDeleteLocation = (id) => {
        deleteLocation(id)
            .then(() => getLocations())
    }

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/locations/create") }}>
                    Add Location
                </button>
            </section>
            <div className="container-cards">
                {locations.map(location => <LocationCard
                    key={location.id}
                    location={location}
                    handleDeleteLocation={handleDeleteLocation} />)}
            </div>
        </>
    )
}