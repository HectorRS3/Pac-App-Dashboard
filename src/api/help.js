const API_URL = "http://localhost:8080/help"

const fetchHelpList = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return (await fetch(`${API_URL}`, options))
}

const createHelp = async (token, title, number, link) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            token
        },
        body: {
            title,
            number,
            link
        }
    }

    return (await fetch(`${API_URL}/create`, options))
}

const updateHelp = async (token, id, title, number, link) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            token
        },
        body: {
            title,
            number,
            link
        }
    }

    return (await fetch(`${API_URL}/update/${id}`, options))
}

const deleteHelp = async (token, id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            token
        }
    }

    return (await fetch(`${API_URL}/delete/${id}`))
}

module.exports = {
    fetchHelpList,
    createHelp,
    updateHelp,
    deleteHelp
}