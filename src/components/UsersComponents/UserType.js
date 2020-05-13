import React from 'react';
import Axios from 'axios';
import { Form, Button } from 'react-bootstrap';

class UserType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: undefined,
            lastName: undefined,
            username: undefined,
            password: undefined
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            let response;

            if (this.props.edit) {
                response = await Axios({
                    method: 'PUT',
                    url: 'http://localhost:8080/user/update/' + this.props.userId, 
                    headers: {
                        token: localStorage.getItem('token')
                    },
                    data: {
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        username: this.state.username
                    }
                });
            } else {
                response = await Axios({
                    method: 'POST',
                    url: 'http://localhost:8080/user/create',
                    headers: {
                        token: localStorage.getItem('token')
                    },
                    data: {
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        username: this.state.username,
                        password: this.state.password
                    }
                });
            }

            window.alert(response.data.message);
        } catch (error) {
            console.error(error.message, error.stack);
        }
    }

    render() {
        return (
            <div>
                <Form>

                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstName" placeholder="Enter First Name" value={this.state.firstName} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastName" placeholder="Enter Last Name" value={this.state.lastName} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>

                    {
                        this.props.edit ?
                            <Form.Group>
                                <Form.Text className="text-muted">
                                    Can't change password here.
                        </Form.Text>
                            </Form.Group> :
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} />
                            </Form.Group>}

                    {
                        this.props.edit ?
                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                Update
                        </Button> :
                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                Create
                        </Button>
                    }

                </Form>
            </div>
        );
    }
}

export default UserType;