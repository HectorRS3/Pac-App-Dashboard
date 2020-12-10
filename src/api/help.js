const API_URL = "http://localhost:8080/help"

const fetchHelpList = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return (await fetch(`${API_URL}`, options)).json()
}

const createHelp = async (token, title, number, link) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            token
        },
        body: JSON.stringify({
            title,
            number,
            link
        })
    }

    return (await fetch(`${API_URL}/create`, options)).json()
}

const updateHelp = async (token, id, title, number, link) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            token
        },
        body: JSON.stringify({
            title,
            number,
            link
        })
    }

    return (await fetch(`${API_URL}/update/${id}`, options)).json()
}

const deleteHelp = async (token, id) => {
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
    fetchHelpList,
    createHelp,
    updateHelp,
    deleteHelp
}