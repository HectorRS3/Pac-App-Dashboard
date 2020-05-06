import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Table, Container } from 'react-bootstrap'

function AdminPosts() {
    const [state, setState] = useState(undefined)
    useEffect(() => {
      fetchData();
      
      return function cleanup() {
          console.log("Done!")
      }
    }, [])

    async function fetchData() {
        const response = await Axios({
            method: 'GET',
            url: "http://localhost:8080/post/",
        })

        setState(response.data);
    }

    if(!state) {
        return (
            <p>LOADING...</p>
        )
    } else {
        return (
            <Container>
                <h1>Admin Posts</h1>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>author</th>
                            <th>summary</th>
                            <th>body</th>
                            <th>link</th>
                            <th>tags</th>
                            <th>category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map(item => {
                                return (
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.author}</td>
                                        <td>{item.summary}</td>
                                        <td>{item.body}</td>
                                        <td>{item.link}</td>
                                        <td>{item.tags}</td>
                                        <td>{item.category}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default AdminPosts;