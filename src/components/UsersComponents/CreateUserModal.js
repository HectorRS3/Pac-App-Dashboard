import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import UserType from './UserType';

function CreateUserModal() {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    return(
        <>
          <Button variant="outline-light" onClick={handleShow}>Create User</Button>
          <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Create User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserType edit={false}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CreateUserModal;