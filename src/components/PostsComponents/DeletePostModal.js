import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import DeletePostButton from './DeletePostButton'

function DeletePostModal({ postId, postTitle }) {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    return(
        <>
          <Button size="sm" variant="danger" onClick={handleShow}>Delete</Button>
          <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete {postTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete {postTitle}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleHide}>Close</Button>
                    <DeletePostButton postId={postId}/>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeletePostModal;