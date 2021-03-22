import React, {useState} from 'react';
import {Form, Modal, Button} from 'react-bootstrap';
import useInput from '../../hooks/useInput';
import { EventsAPI } from'../../api/'

function EditActividadesModal({ eventId }) {
    const [show, setShow] = useState(false);
    
    const [title, setTitle] = useInput("");
    const [organizer, setOrganizer] = useInput("");
    const [date, setDate] = useInput("");
    const [description, setDescription] = useInput("");
    const [link, setLink] = useInput("");

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const event = {
                title,
                organizer,
                date,
                description,
                link
            }
            await EventsAPI().updateEvent(eventId, event);
            window.location.reload();
        } catch(error) {
            window.console.log(error.message, error.stack)
        }
    }

    return(
        <>
          <Button size="sm" variant="primary" onClick={handleShow}>Edit</Button>
          <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Activity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" placeholder="Enter Title" value={title} onChange={setTitle} />
                        </Form.Group>
                        <Form.Group controlId="formBasicAuthor">
                            <Form.Label>Organizer</Form.Label>
                            <Form.Control type="text" name="organizer" placeholder="Enter Organizer" value={organizer} onChange={setOrganizer} />
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

export default EditActividadesModal;