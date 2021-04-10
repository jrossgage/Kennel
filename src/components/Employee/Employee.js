import React from "react";
import "./Employee.css";
import { useHistory } from "react-router-dom";

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    const history = useHistory()
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-employeename">
                    {employee.name}
                </span></h3>
                <p>Location: {employee.location.name}</p>
                <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Terminate</button>
            </div>

            <button type="button"
                onClick={() => history.push(`/employees/${employee.id}/edit`)}>
                Edit
             </button>

        </div>
    );
}