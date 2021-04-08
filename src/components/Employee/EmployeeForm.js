import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addEmployee } from '../../modules/EmployeeManager'
import './EmployeeForm.css'
import { getAllLocations } from '../../modules/LocationManager'

export const EmployeeForm = () => {

    const [employee, setEmployee] = useState({ name: "", locationId: 0 });

    const [isLoading, setIsLoading] = useState(false);

    const [locations, setLocations] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (event) => {

        const newEmployee = { ...employee }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newEmployee[event.target.id] = selectedVal
        setEmployee(newEmployee)
    }

    //load location data and set state
    useEffect(() => {
        getAllLocations()
        .then(response => {
            setLocations(response)
        })
    }, [])

    const handleClickSaveEmployee = (event) => {
        event.preventDefault()

        const locationId = employee.locationId

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            //invoke addAnimal passing animal as an argument.
            //once complete, change the url and display the animal list
            addEmployee(employee)
                .then(() => history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
			<h2 className="employeeForm__title">New Employee</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Employee name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
				</div>
			</fieldset>
	
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			
			<button className="btn btn-primary"
				onClick={handleClickSaveEmployee}>
				Save Employee
          </button>
		</form>
    )
}
