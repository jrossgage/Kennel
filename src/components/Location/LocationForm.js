import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addLocation } from '../../modules/LocationManager';
import './LocationForm.css'


export const LocationForm = () => {

    const [location, setLocation] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleControlledInputChange = (event) => {

        const newLocation = { ...location }
        let selectedVal = event.target.value
        newLocation[event.target.id] = selectedVal
        setLocation(newLocation)
    }

    const handleClickSaveLocation = (event) => {
        event.preventDefault()

        const name = location.name
        const address = location.address

        if (name === 0 || address === 0) {
            window.alert("Please write a name and an address")
        } else {
            //invoke addAnimal passing animal as an argument.
            //once complete, change the url and display the animal list
            addLocation(location)
                .then(() => history.push("/locations"))
        }
    }

    return (
        <form className="locationForm">
			<h2 className="locationForm__title">New Location</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Location name: </label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">Address: </label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="address" value={location.address} />
				</div>
			</fieldset>

			
           
			
			<button className="btn btn-primary"
				onClick={handleClickSaveLocation}>
				Save Location
          </button>
		</form>
    )
}
