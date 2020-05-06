import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';

import AdminUsers from '../views/Admin/AdminUsers';
import AdminActividades from '../views/Admin/AdminActividades';
import AdminPosts from '../views/Admin/AdminPosts';
import AdminAyuda from '../views/Admin/AdminAyuda';

export default function AdminRouter(props) {
    function handleLogout(){
        localStorage.removeItem('token');
        window.location.replace('/');
    }
    return (
        <Router>
            <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="/">Pac App Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/admin/users">Users</Nav.Link>
                        <Nav.Link href="/admin/actividades">Actividades</Nav.Link>
                        <Nav.Link href="/admin/posts">Posts</Nav.Link>
                        <Nav.Link href="/admin/ayuda">Ayuda</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Redirect exact from="/" to="/admin/users" />
                <Route path="/admin/users">
                    <AdminUsers/>
                </Route>
                <Route path="/admin/actividades">
                    <AdminActividades/>
                </Route>
                <Route path="/admin/posts">
                    <AdminPosts/>
                </Route>
                <Route path="/admin/ayuda">
                    <AdminAyuda/>
                </Route>
            </Switch>
        </Router>
    );
}