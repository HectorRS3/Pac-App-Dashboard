import React from "react";

function Navbar(props)  {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">{props.title}</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {props.children}
            </div>
        </nav>
    );
}

function NavbarLeft(props) {
    return (
        <ul className="navbar-nav mr-auto">
            {props.children}
        </ul>
    );
}

function NavbarRight(props) {
    return(
        <div className="my-2 my-lg-0">
            {props.children}
        </div>
    );
}

export {Navbar, NavbarLeft, NavbarRight};