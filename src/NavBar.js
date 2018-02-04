import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <ul className="nav">
            <li>
                <NavLink activeClassName="active" to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/popular">Popular</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/battle">Battle</NavLink>
            </li>
            
        </ul>
    );
};

export default NavBar;