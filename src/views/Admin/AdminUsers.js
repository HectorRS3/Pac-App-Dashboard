import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Navbar, Nav, Table, Container } from 'react-bootstrap'

import CreateUserModal from '../../components/UsersComponents/CreateUserModal';
import EditUserModal from '../../components/UsersComponents/EditUserModal';
import DeleteUserModal from '../../components/UsersComponents/DeleteUserModal';

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


    if (!state) {
        return (
            <p>LOADING...</p>
        )
    } else {
        return (
            <Container>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>Admin Users</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <CreateUserModal/> 
                    </Nav>
                </Navbar>

                <Table striped hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.username}</td>
                                        <td>{item.password}</td>
                                        <td>
                                            <EditUserModal userId={item.id}/> <DeleteUserModal userId={item.id} username={item.username} firstName={item.firstName}/>
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