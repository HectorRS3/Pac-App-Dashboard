import React from 'react';

function LoginNavbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <span className="navbar-brand">{props.title}</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav mr-auto"></div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Username" name="username" value={props.username} onChange={props.handleChange}/>
                    <input className="form-control mr-sm-2" type="password" placeholder="Password" name="password" value={props.password} onChange={props.handleChange}/>
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={props.handleLogin}>Login</button>
                </form>
            </div>
        </nav>
    );
}

export default LoginNavbar;