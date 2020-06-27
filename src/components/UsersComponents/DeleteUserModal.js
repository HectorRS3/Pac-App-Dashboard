import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import DeleteUserButton from './DeleteUserButton'

function DeleteUserModal(props) {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    return(
        <>
          <Button size="sm" variant="danger" onClick={handleShow}>Delete</Button>
          <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete {props.firstName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete {props.username}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleHide}>Close</Button>
                    <DeleteUserButton userId={props.userId}/>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteUserModal;