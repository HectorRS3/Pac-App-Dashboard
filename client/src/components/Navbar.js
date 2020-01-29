import React from "react";

function Navbar(props)  {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <span className="navbar-brand">{props.title}</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {props.children}
                </ul>
                <div className="my-2 my-lg-0">
                    <button className="btn btn-outline-light my-2 my-sm-0" type="button" onClick={props.handleLogout}>Logout</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;