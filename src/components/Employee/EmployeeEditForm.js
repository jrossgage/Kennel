import React, { useState, useEffect } from "react"
import "./EmployeeForm.css"
import { updateEmployee, getEmployeeById } from "../../modules/EmployeeManager"
import { useParams, useHistory } from "react-router-dom"
import { getAllLocations } from "../../modules/LocationManager"


export const EmployeeEditForm = () => {
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState([]);

  const { employeeId } = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const handleControlledInputChange = (event) => {

    const newEmployee = { ...employee }
    let selectedVal = event.target.value
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal)
    }
    newEmployee[event.target.id] = selectedVal
    setEmployee(newEmployee)
  }

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: employeeId,
      name: employee.name,
      locationId: employee.locationId
    };

    updateEmployee(editedEmployee)
      .then(() => history.push("/employees")
      )
  }

  useEffect(() => {
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee(employee);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getAllLocations()
      .then(response => {
        setLocations(response)
      })
  }, [])

  return (
    <>
      <form>
        <fieldset>

          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>
          </div>

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


          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}