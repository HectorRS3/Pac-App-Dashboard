const ip = require("public-ip");
let API_URL;

(async () => {
  const publicIp = await ip.v4();
  API_URL = `http://${publicIp}:8080`;
});

export default function HelpAPI() {
  const getHelpList = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }

        const response = await fetch(`${API_URL}/ayudas`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  const submitHelp = help => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify(help)
        }

        const response = await fetch(`${API_URL}/ayudas/create`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  const editHelp = (id, help) => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify(help)
        }

        const response = await fetch(`${API_URL}/ayudas/update/${id}`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  const deleteHelp = id => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          }
        }

        const response = await fetch(`${API_URL}/ayudas/delete/${id}`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  return { getHelpList, submitHelp, editHelp,  deleteHelp }
}