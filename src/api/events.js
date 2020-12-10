const API_MODULE = "http://localhost:8080/actividades"

const fetchEvents = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return (await fetch(`${API_MODULE}`, options))
}