import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Actividades from '../views/Actividades';
import Educacion from '../views/Educacion';
import Recursos from '../views/Recursos';
import Ayuda from '../views/Ayuda';

export default function UserRouter(props) {
    return (
        <Router>
            <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Redirect exact from="/" to="/actividades" />
                <Route path="/actividades">
                    <Actividades />
                </Route>
                <Redirect exact from="/" to="/educacion" />
                <Route path="/educacion">
                    <Educacion />
                </Route>
                <Redirect exact from="/" to="/recursos" />
                <Route path="/recursos">
                    <Recursos />
                </Route>
                <Redirect exact from="/" to="/ayuda" />
                <Route path="/ayuda">
                    <Ayuda />
                </Route>
            </Switch>
        </Router>
    );
}