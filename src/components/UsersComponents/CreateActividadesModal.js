import React, {useState} from 'react';
import Axios from 'axios';
import {Form, Modal, Button} from 'react-bootstrap';
import useInput from '../../hooks/useInput';

function CreateActividadesModal() {
    const [show, setShow] = useState(false);
    
    const [title, setTitle] = useInput("");
    const [author, setAuthor] = useInput("");
    const [date, setDate] = useInput("");
    const [summary, setSummary] = useInput("");
    const [body, setBody] = useInput("");
    const [link, setLink] = useInput("");
    const [tags, setTags] = useInput("");

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response = await Axios({
                method: 'POST',
                url: 'http://localhost:8080/user/create',
                headers: {
                    token: localStorage.getItem('token')
                },
                data: {
                    title: title,
                    author: author,
                    date: date,
                    summary: summary,
                    body: body,
                    libk: link,
                    tags: tags

                }
            });
    
            window.alert(response.data.message)
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
                            <Form.Control type="text" name="date" placeholder="Enter Date" value={date} onChange={setDate} />
                        </Form.Group>
                        <Form.Group controlId="formBasicSummary">
                            <Form.Label>Summary</Form.Label>
                            <Form.Control type="text" name="summary" placeholder="Enter Summary" value={summary} onChange={setSummary} />
                        </Form.Group>
                        <Form.Group controlId="formBasicBody">
                            <Form.Label>Body</Form.Label>
                            <Form.Control type="text" name="body" placeholder="Enter Body" value={body} onChange={setBody} />
                        </Form.Group>
                        <Form.Group controlId="formBasicLink">
                            <Form.Label>Link</Form.Label>
                            <Form.Control type="text" name="link" placeholder="Enter Link" value={link} onChange={setLink} />
                        </Form.Group>
                        <Form.Group controlId="formBasicTags">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control type="text" name="tags" placeholder="Enter Tags" value={tags} onChange={setTags} />
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