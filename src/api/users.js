const USER_ENDPOINT = "/user"

const fetchUsers = async ( token ) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            token
        }
    }

    return (await fetch(`${process.env.API_ROOT_URL}/${USER_ENDPOINT}/`, options)).json()
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

    return (await fetch(`${process.env.API_ROOT_URL}/${USER_ENDPOINT}/create`, options)).json()
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

    return (await fetch(`${process.env.API_ROOT_URL}/${USER_ENDPOINT}/update/${id}`, options)).json()
}

const deleteUser =  async ( token, id ) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            token
        }
    }

    return (await fetch(`${process.env.API_ROOT_URL}/${USER_ENDPOINT}/delete/${id}`, options)).json()
}

module.exports = {
    fetchUsers,
    createUser,
    updateUser,
    deleteUser
}