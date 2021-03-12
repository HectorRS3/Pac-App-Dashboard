const API_URL = "http://localhost:8080"

export default function UsersAPI() {
  const fetchUsers = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          }
        }

        const response = await fetch(`${API_URL}/user`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  const getUserById = id => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          }
        }

        const response = await fetch(`${API_URL}/user/${id}`, options)

        resolve(response.json())

      } catch (error) {
        reject(error)
      }
    })
  }

  const updateUser = (id, user) => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify(user)
        }

        const response = await fetch(`${API_URL}/user/update/${id}`, options)

        resolve(response.json())

      } catch (error) {
        reject(error)
      }
    })
  }

  const createUser = user => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify(user)
        }

        const response = await fetch(`${API_URL}/user/create`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  const deleteUser = id => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          }
        }

        const response = await fetch(`${API_URL}/user/delete/${id}`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  const login = (username, password) => {
      return new Promise(async (resolve, reject) => {
          try {
              const options = {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      username,
                      password
                  })
              }

              const response = await fetch(`${API_URL}/user/login`, options)

              resolve(response.json())
          } catch (error) {
              reject(error)
          }
      })
  }

  return { 
      fetchUsers, 
      getUserById, 
      createUser, 
      updateUser, 
      deleteUser, 
      login 
    }
}