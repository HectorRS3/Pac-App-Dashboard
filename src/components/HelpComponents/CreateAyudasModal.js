import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

function CreateAyudasModal() {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    return(
        <>
          <Button variant="outline-light" onClick={handleShow}>Create Help</Button>
          <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Help</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CreateAyudasModal;