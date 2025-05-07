import React from 'react';
import {NavLink} from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <nav>
            <div className='wrapLink'>
                <NavLink
                    to="/"
                    className={({isActive}) => isActive ? 'active' : 'noActive'}
                    end
                >
                    Home
                </NavLink>
                <NavLink
                    to="/my-games"
                    className={({isActive}) => isActive ? 'active' : 'noActive'}
                >
                    My Games
                </NavLink>
                <NavLink
                    to="/contacts"
                    className={({isActive}) => isActive ? 'active' : 'noActive'}
                >
                    Contacts
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;
