import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    const links = [
        {
            text : 'Home',
            value : '/'
        },
        {
            text : 'About',
            value : '/about'
        }
    ]
    return (
        <div className="navbar navbar-expand-sm bg-light navbar-light">
            <NavLink to="/" className="navbar-brand"><h3>SpaceX Launch Program</h3></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    {
                        links.map((link,index) => (
                            <li key={index} className="nav-item">
                                <NavLink to={link.value} className="nav-link">{link.text}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>    
    )
}

export default Navbar;