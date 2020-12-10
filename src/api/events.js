const API_URL = "http://localhost:8080/actividades"

const fetchEvents = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return (await fetch(`${API_URL}`, options)).json()
}

const createEvent = async (
    token,
    title,
    organizer,
    date,
    description,
    link
) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            token
        },
        body: JSON.stringify({
            title,
            organizer,
            date,
            description,
            link
        })
    }

    return (await fetch(`${API_URL}/create`, options)).json()
}

const updateEvent = async (
    token,
    id,
    title,
    organizer,
    date,
    description,
    link
) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            token
        },
        body: JSON.stringify({
            title,
            organizer,
            date,
            description,
            link
        })
    }

    return (await fetch(`${API_URL}/update/${id}`, options)).json()
}

const deleteEvent = async (
    token, 
    id
) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'applicationj/json',
            token
        }
    }

    return(await fetch(`${API_URL}/delete/${id}`, options)).json()
}

module.exports = {
    fetchEvents,
    createEvent,
    updateEvent,
    deleteEvent
}