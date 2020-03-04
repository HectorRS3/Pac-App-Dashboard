import React, {useState} from 'react';
import * as ax from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import {Navbar, NavbarLeft, NavbarRight} from '../components/Navbar';

  export default function UserRouter(props) {
      const [user, setUser] = useState({
          username: "",
          password: ""
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
          const response = await ax({
            method: "POST",
            url: "http://localhost:8080/user/login",
            data: {
              username: user.username,
              password: user.password
            }
          });
    
          if (response.data.pass) {
            props.setState({ token: response.data.token, isLogged: true });
          } else {
            alert(response.data.message)
          }
        } catch (err) {
          console.error(err.message, err.stack);
        }
      }

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
                            <input className="form-control mr-sm-2" type="text" placeholder="Username" name="username" value={user.username} onChange={handleChange} />
                            <input className="form-control mr-sm-2" type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={props.handleLogin}>Login</button>
                        </form>
                    </NavbarRight>
                </Navbar>
                <Switch>
                    <Route path="/actividades">
                        {/* <Actividades/> */}
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