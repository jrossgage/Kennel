import React, { useState, useEffect } from 'react';
import { getAllLocations, getLocationById, deleteLocation } from '../../modules/LocationManager';
import { LocationCard } from "./Location"

export const LocationList = () => {
    const [locations, setLocations] = useState([]);

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
        <div className="container-cards">
            {locations.map(location => <LocationCard 
            key={location.id} 
            location={location}
            handleDeleteLocation={handleDeleteLocation}/>)}
        </div>
    )
}