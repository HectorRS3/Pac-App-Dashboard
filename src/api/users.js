const API_URL = "http://localhost:8080/user"

const fetchUsers = async ( token ) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            token
        }
    }

    return (await fetch(`${API_URL}/`, options)).json()
}

const createUser = async ( token, firstName, lastName, username, password ) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            token
        },
        body: JSON.stringify({
            firstName,
            lastName,
            username,
            password
        })
    }

    return (await fetch(`${API_URL}/create`, options)).json()
}

const updateUser = async ( token, id, firstName, lastName, username ) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            token
        },
        body: JSON.stringify({
            firstName,
            lastName,
            username
        })
    }

    return (await fetch(`${API_URL}/update/${id}`, options)).json()
}

const deleteUser =  async ( token, id ) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            token
        }
    }

    return (await fetch(`${API_URL}/delete/${id}`, options)).json()
}

module.exports = {
    fetchUsers,
    createUser,
    updateUser,
    deleteUser
}