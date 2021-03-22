import React, {useState, useEffect} from 'react'
import { Navbar, Nav, Table, Container } from 'react-bootstrap'
import CreateActividadesModal from '../../components/EventComponents/CreateActividadesModal'
import EditActividadesModal from '../../components/EventComponents/EditActividadesModal'
import DeleteActividadesModal from '../../components/EventComponents/DeleteActividadesModal'
import { EventsAPI } from '../../api'

function AdminActividades() {
    const [state, setState] = useState(undefined)
    useEffect(() => {
      fetchData();
      
      return function cleanup() {
          console.log("Done!")
      }
    }, [])

    async function fetchData() {
        try {
            const response = await EventsAPI().fetchEvents()
            setState(response);
        } catch (error) {
            console.error(error);
        }
    }

    if(!state) {
        return (
            <p>LOADING...</p>
        )
    } else {
        return (
            <Container>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>Admin Actividades</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <CreateActividadesModal/> 
                    </Nav>
                </Navbar>

                <Table striped hover>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>organizer</th>
                            <th>date</th>
                            <th>description</th>
                            <th>link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map(item => {
                                return (
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.organizer}</td>
                                        <td>{item.date}</td>
                                        <td>{item.description}</td>
                                        <td>{item.link}</td>
                                        <td>
                                            <EditActividadesModal eventId={item.id}/>
                                            <DeleteActividadesModal eventId={item.id} eventTitle={item.title}/>
                                        </td>
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