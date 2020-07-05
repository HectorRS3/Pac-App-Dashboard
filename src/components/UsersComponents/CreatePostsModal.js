import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
function CreatePostsModal() {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    return(
        <>
          <Button variant="outline-light" onClick={handleShow}>Create Post</Button>
          <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    // TODO: New Form
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CreatePostsModal;