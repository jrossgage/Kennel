const remoteURL = "http://localhost:8088"

export const getEmployeeById = (id) => {
    return fetch(`${remoteURL}/employees/${id}?_expand=locations&_expand=costumer`)
    .then(response => response.json())
}

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees`)
    .then(response => response.json())
}

export const deleteEmployee = (id) => {
    return fetch(`${remoteURL}/employees/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}