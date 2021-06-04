const ip = require("public-ip");
let API_URL;

const setIP = async () => {
  const publicIp = await ip.v4();
  API_URL = `http://${publicIp}:8080`;
}

setIP();

export default function PostsAPI() {
  const fetchPosts = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }

        const response = await fetch(`${API_URL}/post`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  const getPostById = id => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }

        const response = await fetch(`${API_URL}/post/${id}`, options)

        resolve(response.json())

      } catch (error) {
        reject(error)
      }
    })
  }

  const updatePost = (id, post) => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify(post)
        }

        const response = await fetch(`${API_URL}/post/update/${id}`, options)

        resolve(response.json())

      } catch (error) {
        reject(error)
      }
    })
  }

  const publishPost = post => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          },
          body: JSON.stringify(post)
        }

        const response = await fetch(`${API_URL}/post/create`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  const deletePost = id => {
    return new Promise(async (resolve, reject) => {
      try {
        const options = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
          }
        }

        const response = await fetch(`${API_URL}/post/delete/${id}`, options)

        resolve(response.json())
      } catch (error) {
        reject(error)
      }
    })
  }

  return { fetchPosts, getPostById, publishPost, updatePost, deletePost }
}