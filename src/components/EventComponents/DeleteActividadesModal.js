import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import DeleteActividadesButton from './DeleteActividadesButton'

function DeleteActividadesModal({ eventId, eventTitle }) {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    return(
        <>
          <Button size="sm" variant="danger" onClick={handleShow}>Delete</Button>
          <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete {eventTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete {eventTitle}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleHide}>Close</Button>
                    <DeleteActividadesButton eventId={eventId}/>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteActividadesModal;