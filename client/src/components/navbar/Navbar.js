import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const handleIsNavbarOpen = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }
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
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <NavLink to="/" className="navbar-brand">SpaceX Launch Program</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-label="Toggle Naivgation" aria-controls="collapsibleNavbar" aria-expanded={isNavbarOpen ? true : false} onClick={handleIsNavbarOpen}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`navbar-collapse ${isNavbarOpen ? '' : 'collapse'}`} id="collapsibleNavbar">
                <ul className="navbar-nav">
                    {
                        links.map((link,index) => (
                            <li key={index} className="nav-item" onClick={() => setIsNavbarOpen(false)}>
                                <NavLink to={link.value} className="nav-link">{link.text}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>    
    )
}

export default Navbar;