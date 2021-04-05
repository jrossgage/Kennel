import React, { useState, useEffect } from 'react';
import { getAllEmployees, getEmployeeById } from '../../modules/EmployeeManager';
import { EmployeeCard } from "./Employee"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return getAllEmployees()
            .then(employeesFromAPI => {
                setEmployees(employeesFromAPI)
            });
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} />)}
        </div>
    )
}
