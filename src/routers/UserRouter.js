import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Navbar, Nav, Carousel, Image } from 'react-bootstrap';
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
            {
                window.location.pathname == '/login' ? <></> : 
                <div className="banner">
                    <a href="https://www.freepik.com/premium-photo/creative-image-many-business-people-conference-group-meeting_10506973.htm#page=1&query=banner%20image&position=8">
                    <Image src="https://image.freepik.com/free-photo/creative-image-many-business-people-conference-group-meeting_31965-8089.jpg" fluid/>
                    </a>
                </div>
            }
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
            <footer className="footer">
             <div className="footer-content">
             <div>
               <h5 className="title">Footer Content</h5>
                <p>
                    Here you can use rows and columns here to organize your footer
                    content.
                        </p>

               </div>
                <div class="footer-links">
                <ul>
                    <li className="list-unstyled">
                        <a href="#!">Link 1</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Link 2</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Link 3</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Link 4</a>
                    </li>
                </ul>
                </div>
             </div>
                <p>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://rcm2.rcm.upr.edu/start/"> Recinto de Ciencias Medicas</a>
                </p>
         
            </footer>
        </Router>
    );
}