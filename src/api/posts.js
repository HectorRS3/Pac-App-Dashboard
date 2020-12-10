const API_URL = "http://localhost:8080/posts"

const fetchPosts = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return (await fetch(`${API_URL}`, options)).json()
}

const createPost = async (
    token,
    title,
    author,
    summary,
    body,
    link,
) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            token
        },
        body: JSON.stringify({
            title,
            author,
            summary,
            body,
            link
        })
    }

    return (await fetch(`${API_URL}/create`, options)).json()
}

const updatePost = async (
    token,
    id,
    title,
    author,
    summary,
    body,
    link,
) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            token
        },
        body: JSON.stringify({
            title,
            author,
            summary,
            body,
            link,
        })
    }

    return (await fetch(`${API_URL}/update/${id}`, options)).json()
}

const deletePost = async (
    token,
    id
) => {
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
    fetchPosts,
    createPost,
    updatePost,
    deletePost
}