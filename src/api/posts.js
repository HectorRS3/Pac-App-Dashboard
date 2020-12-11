const POSTS_ENDPOINT = "/posts"

const fetchPosts = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return (await fetch(`${process.env.API_ROOT_URL}/${POSTS_ENDPOINT}`, options)).json()
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

    return (await fetch(`${process.env.API_ROOT_URL}/${POSTS_ENDPOINT}/create`, options)).json()
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

    return (await fetch(`${process.env.API_ROOT_URL}/${POSTS_ENDPOINT}/update/${id}`, options)).json()
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

    return (await fetch(`${process.env.API_ROOT_URL}/${POSTS_ENDPOINT}/delete/${id}`, options)).json()
}

module.exports = {
    fetchPosts,
    createPost,
    updatePost,
    deletePost
}