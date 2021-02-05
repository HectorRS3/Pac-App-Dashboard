import React from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import { UsersAPI } from '../../api';

function DeleteUserButton(props) {
    async function DELETEDIS(event) {
        try {
            event.preventDefault();
            const {message} = await UsersAPI().deleteUser(props.userId)

            window.alert(message);
            window.location.reload();
        } catch (error) {
            console.error(error.message, error.stack);
        }
    }

    return(
          <Button variant="danger" onClick={DELETEDIS}>Delete</Button>
    );
}

export default DeleteUserButton;