import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';
import Actividades from '../views/RegularViews/Actividades';
import Educacion from '../views/RegularViews/Educacion';
import Recursos from '../views/RegularViews/Recursos';
import Ayuda from '../views/RegularViews/Ayuda';
import Login from '../views/RegularViews/Login';

export default function UserRouter(props) {
    return (
        <Router>
            <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="/">Pac App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/actividades">Actividades</Nav.Link>
                        <Nav.Link href="/educacion">Education</Nav.Link>
                        <Nav.Link href="/recursos">Recursos</Nav.Link>
                        <Nav.Link href="/ayuda">Ayuda</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Redirect exact from="/" to="/actividades" />
                <Route path="/actividades">
                    <Actividades />
                </Route>
                <Route path="/educacion">
                    <Educacion />
                </Route>
                <Route path="/recursos">
                    <Recursos />
                </Route>
                <Route path="/ayuda">
                    <Ayuda />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}