const remoteURL = "http://localhost:8088"

// export const getCustomerById = () => {
//     return fetch(`${remoteURL}/customers/${id}?_expand=location&_expand=animal`)
//     .then(response => response.json())
// }

export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
    .then(response => response.json())
}