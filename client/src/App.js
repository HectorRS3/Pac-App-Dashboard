// Third-party modules
import React, {useState} from 'react';
import * as ax from 'axios';

//Components
import LoginNavbar from './components/LoginNavbar';
import Navbar from './components/Navbar';
import UserTable from "./components/UserTable"
import Tabs from "./components/Tabs"

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
      const {name, value} = evt.target;
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
  
      setState({token: response.data.token, isLogged: true});
    } catch(err) {
      console.error(err.message, err.stack);
    }
  }

  function handleLogout() {
    setState({token: "", isLogged: false})
  }

  if(!state.isLogged) {
    return (
      <div className="Login">
        <LoginNavbar
          title="PAC APP"
          username={state.username}
          password={state.password}
          handleChange={handleChange}
          handleLogin={handleLogin}
        />
      </div>
    );
  } else {
      return (
          <div className="App container">
            <Navbar title="PAC APP" handleLogout={handleLogout}/>
            <Tabs
              usersView={<UserTable 
                token={state.token}
                firstName={state.firstName}
                lastName={state.lastName}
                username={state.username}
                password={state.password}
                handleChange={handleChange}
              />}
            />
          </div>
      );
  }
}

export default App;
