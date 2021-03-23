import React from 'react';
import { Button } from 'react-bootstrap';
import { PostsAPI } from '../../api';

function DeletePostButton({ postId }) {
    async function DELETEDIS(event) {
        try {
            event.preventDefault();
            const response = await PostsAPI().deletePost(postId);
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

export default DeletePostButton; 