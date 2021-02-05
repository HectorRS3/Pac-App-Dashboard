import React, { useState } from 'react';
import Axios from 'axios';
import { Form, Modal, Button } from 'react-bootstrap';
import useInput from '../../hooks/useInput'
import { UsersAPI } from '../../api';

function EditUserModal(props) {
    const [show, setShow] = useState(false);

    const [firstName, setFirstName] = useInput("");
    const [lastName, setLastName] = useInput("");
    const [username, setUsername] = useInput("");

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const user = {
                firstName,
                lastName,
                username
            }

            const { message } = await UsersAPI().updateUser(props.userId, user)
    
            window.alert(message)
            window.location.reload()
        } catch(error) {
            window.console.log(error.message, error.stack)
        }
    }

    return (
        <>
            <Button size="sm" variant="primary" onClick={handleShow}>Edit</Button>
            <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User #{props.userId} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstName" placeholder="Enter First Name" value={firstName} onChange={setFirstName} />
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastName" placeholder="Enter Last Name" value={lastName} onChange={setLastName} />
                        </Form.Group>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username </Form.Label>
                            <Form.Control type="text" name="username" placeholder="Enter Username" value={username} onChange={setUsername} />
                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleHide}>Close</Button>
                    <Button variant="success" onClick={handleSubmit}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditUserModal;