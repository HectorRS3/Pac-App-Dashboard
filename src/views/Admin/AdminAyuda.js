import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Navbar, Nav, Table, Container } from 'react-bootstrap'
import CreateAyudasModal from '../../components/UsersComponents/CreateAyudasModal'

function AdminAyuda() {
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
            url: "http://localhost:8080/ayudas/",
            headers: {
                filter: "AdminAyuda"
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
                  <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>Admin Ayudas</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <CreateAyudasModal/> 
                    </Nav>
                </Navbar>

                <Table striped hover>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>number</th>
                            <th>link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map(item => {
                                return (
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.number}</td>
                                        <td>{item.link}</td>
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

export default AdminAyuda;