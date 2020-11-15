import React from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';

function DeletePostsButton(id) {
    async function DELETEDIS(event) {
        try {
            event.preventDefault();
            const response = await Axios({
                method: 'DELETE',
                url: 'http://localhost:8080/user/delete/' + id,
                headers: {
                    token: localStorage.getItem('token')
                }
            });

            window.alert(response.data.message);
            window.location.reload();
        } catch (error) {
            console.error(error.message, error.stack);
        }
    }

    return(
          <Button size="ms" variant="danger" onClick={DELETEDIS}>Delete</Button>
    );
}

export default DeletePostsButton;