const remoteURL = "http://localhost:8088"

export const getLocationById = (id) => {
    return fetch(`${remoteURL}/locations/${id}?_expand=customers&_expand=animals`)
    .then(response => response.json())
}

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
    .then(response => response.json())
}

export const deleteLocation = (id) => {
    return fetch(`${remoteURL}/locations/${id}`, {
        method: "DELETE"
    }).then(response => response.json())
};