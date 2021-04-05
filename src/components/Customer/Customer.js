import React from "react";
import "./Customer.css";

export const CustomerCard = ({customer}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-customername">
                    {customer.name}
                </span></h3>
                <p>Phone: {customer.phoneNumber}</p>
            </div>
        </div>
    );
}