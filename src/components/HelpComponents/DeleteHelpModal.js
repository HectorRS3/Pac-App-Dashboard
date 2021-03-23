import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import DeleteHelpButton from './DeleteHelpButton'

function DeleteHelpModal({ helpId, helpTitle }) {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    return(
        <>
          <Button size="sm" variant="danger" onClick={handleShow}>Delete</Button>
          <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete {helpTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete {helpTitle}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleHide}>Close</Button>
                    <DeleteHelpButton helpId={helpId}/>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteHelpModal;