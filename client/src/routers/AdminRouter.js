import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Navbar, NavbarLeft, NavbarRight } from '../components/Navbar';
import AdminActividades from '../views/Admin/AdminActividades';

export default function AdminRouter(props) {
    return (
        <Router>
            <Navbar title="Pac App">
                <NavbarLeft>
                    <Link className="nav-link" to="/admin/usuarios">Usuarios</Link>
                    <Link className="nav-link" to="/admin/actividades">Actividades</Link>
                    <Link className="nav-link" to="/admin/educacion">Educacion</Link>
                    <Link className="nav-link" to="/admin/recursos">Recursos</Link>
                    <Link className="nav-link" to="/admin/ayudas">Ayudas</Link>
                </NavbarLeft>
                <NavbarRight>
                    <button className="btn btn-outline-light" onClick={props.handleLogout}>Logout</button>
                </NavbarRight>
            </Navbar>
            <Switch>
                <Redirect exact from="/" to="/admin/actividades" />
                <Route path="/admin/actividades">
                    <AdminActividades/>
                </Route>
                <Route path="/admin/educacion">
                    {/* <AdminEducacion/> */}
                </Route>
                <Route path="/admin/recursos">
                    {/* <AdminRecursos/> */}
                </Route>
                <Route path="/admin/ayudas">
                    {/* <AdminAyudas/> */}
                </Route>
            </Switch>
        </Router>
    );
}