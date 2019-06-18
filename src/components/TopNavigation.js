import React from 'react';
import { NavLink } from "react-router-dom";

const TopNavigation = ({showGameForm, showLoginForm, showSignupForm}) => (
    <div className="ui secondary pointing menu">
        <NavLink exact to="/" className="item">
            BGShop
        </NavLink>
        <NavLink exact to="/games" className="item">
            Games
        </NavLink>
        <NavLink exact to="/games/new" className="item">
            <i className="icon plus" /> Add New Game
        </NavLink>
        <NavLink exact to="/login" className="item">
            <i className="icon sign-in" /> Login
        </NavLink>
        <NavLink exact to="/signup" className="item">
            <i className="icon pin" /> Signup
        </NavLink>
    </div>           
);

export default TopNavigation;