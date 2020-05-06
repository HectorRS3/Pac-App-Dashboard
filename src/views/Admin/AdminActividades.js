import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Table, Container } from 'react-bootstrap'

function AdminActividades() {
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
            headers: {
                filter: "AdminActividades"
            }
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
                <h1>Admin Actividades</h1>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>author</th>
                            <th>Date</th>
                            <th>summary</th>
                            <th>body</th>
                            <th>link</th>
                            <th>tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map(item => {
                                return (
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.author}</td>
                                        <td>{item.date}</td>
                                        <td>{item.summary}</td>
                                        <td>{item.body}</td>
                                        <td>{item.link}</td>
                                        <td>{item.tags}</td>
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

export default AdminActividades;