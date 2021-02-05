const API_URL = process.env.API_ROOT_URL

export default function EventsAPI() {
  const fetchEvents = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }

        const response = await fetch(`${API_URL}/actividades`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  const getEventById = id => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        }

        const response = await fetch(`${API_URL}/actividades/${id}`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  const createEvent = event => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify(event)
        }

        const response = await fetch(`${API_URL}/actividades/create`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  const updateEvent = (id, event) => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify(event)
        }

        const response = await fetch(`${API_URL}/actividades/${id}`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  const removeEvent = id => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          }
        }

        const response = await fetch(`${API_URL}/actividades/${id}`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  return { fetchEvents, getEventById, createEvent, updateEvent, removeEvent }
}