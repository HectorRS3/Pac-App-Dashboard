// Third-party modules
import React, { useState } from 'react';
import * as ax from 'axios';

//Components
import Navbar from './components/Navbar';
import UserTable from "./components/UserTable"
import Tabs from "./components/Tabs"
import Modal from "./components/Modal"

// CSS
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    token: null,
    isLogged: false
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setState(state => ({
      ...state, [name]: value
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
          username: state.username,
          password: state.password
        }
      });

      setState({ token: response.data.token, isLogged: true });
    } catch (err) {
      console.error(err.message, err.stack);
    }
  }

  function handleLogout() {
    setState({ token: "", isLogged: false })
  }

  if (!state.isLogged) {
    return (
      <div className="App">
        <Navbar title="PAC APP">
          <ul className="navbar-nav mr-auto"></ul>
          <div className="my-2 my-lg-0">
            <button className="btn btn-outline-primary my-2 my-sm-0" type="button" data-toggle="modal" data-target="#loginModal">Go to Admin Console</button>
            <Modal modalID="loginModal" title="Admin Console" submit={handleLogin}>
              <form>
                <div className="form-group">
                  <input className="form-control" type="text" name="username" value={state.username} placeholder="Username" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <input className="form-control" type="password" name="password" value={state.password} placeholder="Password" onChange={handleChange} />
                </div>
              </form>
            </Modal>
          </div>
        </Navbar>
        <Tabs variant="tabs" />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar title="PAC APP">
          <ul className="navbar-nav mr-auto"></ul>
          <div className="my-2 my-lg-0">
            <button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={handleLogout}>Logout</button>
          </div>
        </Navbar>
        <div className="App-content container">
          <UserTable
            token={state.token}
            firstName={state.firstName}
            lastName={state.lastName}
            username={state.username}
            password={state.password}
            handleChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
