import React from 'react';
import { Button } from 'react-bootstrap';
import { HelpAPI } from '../../api';

function DeleteHelpButton({ helpId }) {
    async function DELETEDIS(help) {
        try {
            help.preventDefault();
            const response = await HelpAPI().removeHelp(helpId);
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

export default DeleteHelpButton; 