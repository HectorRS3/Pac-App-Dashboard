import React, { useState } from 'react';
import { useHistory } from "react-router-dom"
import { Container, Form, Button } from 'react-bootstrap';

import { UsersAPI } from "../../api"

export default function Login() {
  const [user, setUser] = useState({
    username: undefined,
    password: undefined
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setUser(user => ({
      ...user, [name]: value
    })
    );
  }

  async function handleLogin(evt) {
    try {
      evt.preventDefault();

      const history = useHistory

      const response = await UsersAPI().login(user.username, user.password)

      console.log(response)

      if (response.pass) {
        localStorage.setItem('token', response.token);
        history.push('/admin/users');
      } else {
        alert(response.message)
      }
    } catch (err) {
      console.error(err.message, err.stack);
    }
  }

  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" placeholder="Enter Username" value={user.username} onChange={handleChange} />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
                    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleLogin}>
          Submit
                </Button>
      </Form>
    </Container>
  );
}