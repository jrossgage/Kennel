import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addCustomer } from '../../modules/CustomerManager';
import './CustomerForm.css'


export const CustomerForm = () => {

    const [customer, setCustomer] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleControlledInputChange = (event) => {

        const newCustomer = { ...customer }
        let selectedVal = event.target.value
        newCustomer[event.target.id] = selectedVal
        setCustomer(newCustomer)
    }
 
    const handleClickSaveCustomer = (event) => {
        event.preventDefault()

        const name = customer.name
        const phoneNumber = customer.phoneNumber

        if (name === 0 || phoneNumber === 0){
            window.alert("Please write a name and a phone number")
        } else {
            addCustomer(customer)
                .then(() => history.push("/customers"))
        }
    }

    return (
        <form className="customerForm">
			<h2 className="customerForm__title">New Customer</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Customer name: </label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="customer name" value={customer.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="phone">Customer Phone Number: </label>
					<input type="text" id="phoneNumber" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="phone number" value={customer.phoneNumber} />
				</div>
			</fieldset>
			
			<button className="btn btn-primary"
				onClick={handleClickSaveCustomer}>
				Save Customer
          </button>
		</form>
    )
}
