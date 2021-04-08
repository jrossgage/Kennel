import React, { useState, useEffect } from 'react';
import { deleteEmployee, getAllEmployees, getEmployeeById } from '../../modules/EmployeeManager';
import { EmployeeCard } from "./Employee"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return getAllEmployees()
            .then(employeesFromAPI => {
                setEmployees(employeesFromAPI)
            });
    };

    const history = useHistory();

    const handleDeleteEmployee = (id) => {
        deleteEmployee(id)
            .then(() => getEmployees());
    }

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/employees/create") }}>
                    Hire Employee
                </button>
            </section>
            <div className="container-cards">
                {employees.map(employee => <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    handleDeleteEmployee={handleDeleteEmployee} />)}
            </div>
        </>
    )
}
