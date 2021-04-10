import React, { useState, useEffect } from "react"
import "./CustomerForm.css"
import { updateCustomer, getCustomerById } from "../../modules/CustomerManager"
import { useParams, useHistory } from "react-router-dom"


export const CustomerEditForm = () => {
  const [customer, setCustomer] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {customerId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...customer };
    stateToChange[evt.target.id] = evt.target.value;
    setCustomer(stateToChange);
  };

  const updateExistingCustomer = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedCustomer = {
      id: customerId,
      name: customer.name,
      email: customer.email
    };

  updateCustomer(editedCustomer)
    .then(() => history.push("/customers")
    )
  }

  useEffect(() => {
    getCustomerById(customerId)
      .then(customer => {
        setCustomer(customer);
        setIsLoading(false);
      });
  }, []);

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
              value={customer.name}
            />
            <label htmlFor="name">Customer name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="email"
              value={customer.email}
            />
            <label htmlFor="email">email</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingCustomer}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}