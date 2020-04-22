import React, { useState } from 'react';
import * as ax from 'axios';

import AdminRouter from './AdminRouter';
import UserRouter from './UserRouter';

export default function RouterRoot(props) {
    const [state, setState] = useState({
        token: null,
        isLogged: false
    });

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
                setState({ token: response.data.token, isLogged: true });
            } else {
                alert(response.data.message)
            }
        } catch (err) {
            console.error(err.message, err.stack);
        }
    }

    function handleLogout() {
        setState({ token: "", isLogged: false })
    }

    if (state.isLogged) {
        return (
            <AdminRouter handleLogout={handleLogout} />
        );
    } else {
        return (
            <UserRouter username={user.username} password={user.password} handleChange={handleChange} handleLogin={handleLogin} />
        );
    }
}