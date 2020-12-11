const EVENTS_ENDPOINT = "/actividades"

const fetchEvents = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return (await fetch(`${process.env.API_ROOT_URL}/${EVENTS_ENDPOINT}`, options)).json()
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

    return (await fetch(`${process.env.API_ROOT_URL}/${EVENTS_ENDPOINT}/create`, options)).json()
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

    return (await fetch(`${process.env.API_ROOT_URL}/${EVENTS_ENDPOINT}/update/${id}`, options)).json()
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

    return(await fetch(`${process.env.API_ROOT_URL}/${EVENTS_ENDPOINT}/delete/${id}`, options)).json()
}

module.exports = {
    fetchEvents,
    createEvent,
    updateEvent,
    deleteEvent
}