import React, {useState} from 'react';
import { HelpAPI } from'../../api/';
import {Form, Modal, Button} from 'react-bootstrap';
import useInput from '../../hooks/useInput';

function EditHelpModal({helpId}) {
    const [show, setShow] = useState(false);

    const [title, setTitle] = useInput("");
    const [number, setNumber] = useInput("");
    const [link, setLink] = useInput("");

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const help = {
                title,
                number,
                link
            }
            await HelpAPI().updateHelp(helpId, help);
            window.location.reload();
        } catch(error) {
            window.console.log(error.message, error.stack)
        }
    }

    return(
        <>
          <Button size="ms" variant="primary" onClick={handleShow}>Edit</Button>
          <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Help</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" placeholder="Enter Title" value={title} onChange={setTitle} />
                        </Form.Group>
                        <Form.Group controlId="formBasicNumber">
                            <Form.Label>Number</Form.Label>
                            <Form.Control type="text" name="number" placeholder="Enter Number" value={number} onChange={setNumber} />
                        </Form.Group>
                        <Form.Group controlId="formBasicLink">
                            <Form.Label>Link</Form.Label>
                            <Form.Control type="text" name="link" placeholder="Enter Link" value={link} onChange={setLink} />
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

export default EditHelpModal;