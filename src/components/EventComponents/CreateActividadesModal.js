import React, {useState} from 'react';
import {Form, Modal, Button} from 'react-bootstrap';
import { EventsAPI } from '../../api'
import useInput from '../../hooks/useInput';

function CreateActividadesModal() {
    const [show, setShow] = useState(false);
    
    const [title, setTitle] = useInput("");
    const [author, setAuthor] = useInput("");
    const [date, setDate] = useInput("");
    const [description, setDescription] = useInput("");
    const [link, setLink] = useInput("");

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const event = {
                title,
                organizer: author,
                date,
                description,
                link
            }
            await EventsAPI().createEvent(event)
            window.location.reload()
        } catch(error) {
            window.console.log(error.message, error.stack)
        }
    }

    return(
        <>
          <Button variant="outline-light" onClick={handleShow}>Create Activity</Button>
          <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Activity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" placeholder="Enter Title" value={title} onChange={setTitle} />
                        </Form.Group>
                        <Form.Group controlId="formBasicAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" name="author" placeholder="Enter Author" value={author} onChange={setAuthor} />
                        </Form.Group>
                        <Form.Group controlId="formBasicDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" name="date" placeholder="Enter Date" value={date} onChange={setDate} />
                        </Form.Group>
                        <Form.Group controlId="formBasicSummary">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" placeholder="Enter Description" value={description} onChange={setDescription} />
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

export default CreateActividadesModal;