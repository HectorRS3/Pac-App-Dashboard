import React from 'react'
import { Modal } from 'react-bootstrap';

function EventDetailsModal({isOpen, setIsOpen, event }) {
  return (<>
  <Modal show={isOpen}>
    <Modal.Header closeButton onHide={() => setIsOpen(!isOpen)}>
      <Modal.Title>{event.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
      When: {new Date(event.date).getMonth() + 1}/{new Date(event.date).getDay()}/{new Date(event.date).getUTCFullYear()}
      </p>
      <p>Organized by: {event.organizer}</p>
      <p>{event.description}</p>
      <p><a href={event.link} target="_blank noopener noreference">Mas Informacion...</a></p>
    </Modal.Body>
  </Modal></>);
}
export default EventDetailsModal;