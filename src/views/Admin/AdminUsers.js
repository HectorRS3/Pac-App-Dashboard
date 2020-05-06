import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Table, Container } from 'react-bootstrap'

function AdminActividades(props) {
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
            url: "http://localhost:8080/user/",
            headers: {
                token: localStorage.getItem('token')
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
                <h1>Admin Users</h1>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>username</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map(item => {
                                return (
                                    <tr>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.username}</td>
                                        <td>{item.password}</td>
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