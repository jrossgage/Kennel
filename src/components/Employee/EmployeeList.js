import React, { useState, useEffect } from 'react';
import { deleteEmployee, getAllEmployees, getEmployeeById } from '../../modules/EmployeeManager';
import { EmployeeCard } from "./Employee"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return getAllEmployees()
            .then(employeesFromAPI => {
                setEmployees(employeesFromAPI)
            });
    };

    const handleDeleteEmployee = (id) => {
        deleteEmployee(id)
        .then(() => getEmployees());
    }

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard 
            key={employee.id} 
            employee={employee}
            handleDeleteEmployee={handleDeleteEmployee} />)}
        </div>
    )
}
