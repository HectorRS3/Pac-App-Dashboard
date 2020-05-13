import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import UserType from './UserType';

function EditUserModal(props) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    return (
        <>
            <Button size="sm" variant="primary" onClick={handleShow}>Edit</Button>
            <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserType edit={true} userId={props.userId}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditUserModal;