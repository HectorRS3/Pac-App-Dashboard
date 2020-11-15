import React, {useState} from 'react';
import Axios from 'axios';

import {Modal, Button} from 'react-bootstrap';
import useInput from '../../hooks/useInput';

function CreateAyudasModal() {
    const [show, setShow] = useState(false);

    const [title, setTitle] = useInput("");
    const [number, setNumber] = useInput("");
    const [link, setLink] = useInput("");

    
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
                    number: number,
                    link: link
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
          <Button variant="outline-light" onClick={handleShow}>Create Help</Button>
          <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Help</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleHide}>Close</Button>
                    <Button variant="success" onClick={handleSubmit}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateAyudasModal;