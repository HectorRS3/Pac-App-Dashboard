import React from 'react';
import { Button } from 'react-bootstrap';
import { EventsAPI } from '../../api';

function DeleteActividadesButton({ eventId }) {
    async function DELETEDIS(event) {
        try {
            event.preventDefault();
            const response = await EventsAPI().removeEvent(eventId);
            window.alert(response.message);
            window.location.reload();
        } catch (error) {
            console.error(error.message, error.stack);
        }
    }

    return(
          <Button variant="danger" onClick={DELETEDIS}>Delete</Button>
    );
}

export default DeleteActividadesButton; 