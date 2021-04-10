import React from "react";
import "./Customer.css";
import { useHistory} from "react-router-dom"

export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
    const history = useHistory()
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-customername">
                    {customer.name}
                </span></h3>
                <p>Email: {customer.email}</p>
                <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Remove</button>
            </div>

            <button type="button"
                onClick={() => history.push(`/customers/${customer.id}/edit`)}>
                Edit
            </button>

        </div>
    );
}