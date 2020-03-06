import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

  import {Navbar, NavbarLeft, NavbarRight} from '../components/Navbar';
  import Actividades from '../views/Actividades';

  export default function UserRouter(props) {
      return(
          <Router>
              <Navbar title="Pac App">
                    <NavbarLeft>
                        <Link className="nav-link" to="/actividades">Actividades</Link>
                        <Link className="nav-link" to="/educacion">Educacion</Link>
                        <Link className="nav-link" to="/recursos">Recursos</Link>
                        <Link className="nav-link" to="/ayudas">Ayudas</Link>
                    </NavbarLeft>
                    <NavbarRight>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Username" name="username" value={props.username} onChange={props.handleChange} />
                            <input className="form-control mr-sm-2" type="password" placeholder="Password" name="password" value={props.password} onChange={props.handleChange} />
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={props.handleLogin}>Login</button>
                        </form>
                    </NavbarRight>
                </Navbar>
                <Switch>
                    <Redirect exact from="/" to="/actividades" />
                    <Route path="/actividades">
                        <Actividades/>
                    </Route>
                    <Route path="/educacion">
                        {/* <Educacion/> */}
                    </Route>
                    <Route path="/recursos">
                        {/* <Recursos/> */}
                    </Route>
                    <Route path="/ayudas">
                        {/* <Ayudas/> */}
                    </Route>
                </Switch>
          </Router>
      );
  }