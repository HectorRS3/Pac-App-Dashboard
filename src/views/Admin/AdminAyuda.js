import React, {useState, useEffect} from 'react'
import { Navbar, Nav, Table, Container } from 'react-bootstrap'
import CreateHelpModal from '../../components/HelpComponents/CreateHelpModal'
import EditHelpModal from '../../components/HelpComponents/EditHelpModal'
import DeleteHelpModal from '../../components/HelpComponents/DeleteHelpModal'
import { HelpAPI } from '../../api'

function AdminAyuda() {
    const [state, setState] = useState(undefined)
    useEffect(() => {
      fetchData();
      
      return function cleanup() {
          console.log("Done!")
      }
    }, [])

    async function fetchData() {
        const response = await HelpAPI().getHelpList();
        setState(response);
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
                        <CreateHelpModal/> 
                    </Nav>
                </Navbar>

                <Table striped hover>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>phone number</th>
                            <th>link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map(item => {
                                return (
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.phone_number}</td>
                                        <td>{item.link}</td>
                                        <td>
                                            <EditHelpModal helpId={item.id}/>
                                            <DeleteHelpModal helpId={item.id} helpTitle={item.title} />
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

export default AdminAyuda;