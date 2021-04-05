import React, { useState, useEffect } from 'react';
import { CustomerCard } from './Customer';
import { getAllCustomers, getCustomerById } from '../../modules/CustomerManager'

export const CustomerList = () => {
    const [customers, setCustomer] = useState([]);

    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            setCustomer(customersFromAPI)
        });
    }

    useEffect(() => {
        getCustomers();
    }, []);

    return (
        <div className="container-cards">
            {customers.map(customer => <CustomerCard key={customer.id} customer={customer} />)}
        </div>
    );
};
