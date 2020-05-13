import React from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';

function DeleteUserButton(props) {
    async function DELETEDIS(event) {
        try {
            event.preventDefault();
            const response = await Axios({
                method: 'DELETE',
                url: 'http://localhost:8080/user/delete/' + props.userId,
                headers: {
                    token: localStorage.getItem('token')
                }
            });

            window.alert(response.data.message);
        } catch (error) {
            console.error(error.message, error.stack);
        }
    }

    return(
          <Button size="sm" variant="danger" onClick={DELETEDIS}>Delete</Button>
    );
}

export default DeleteUserButton;