const HELP_ENDPOINT = "/help"

const fetchHelpList = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return (await fetch(`${process.env.API_ROOT_URL}/${HELP_ENDPOINT}`, options)).json()
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

    return (await fetch(`${process.env.API_ROOT_URL}/${HELP_ENDPOINT}/create`, options)).json()
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

    return (await fetch(`${process.env.API_ROOT_URL}/${HELP_ENDPOINT}/update/${id}`, options)).json()
}

const deleteHelp = async (token, id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            token
        }
    }

    return (await fetch(`${process.env.API_ROOT_URL}/${HELP_ENDPOINT}/delete/${id}`, options)).json()
}

module.exports = {
    fetchHelpList,
    createHelp,
    updateHelp,
    deleteHelp
}