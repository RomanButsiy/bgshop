import React from 'react';
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const TopNavigation = ({isAuthenticated, isAdmin, logout}) => (
    <div className="ui secondary pointing menu">
        <NavLink exact to="/" className="item">
            BGShop
        </NavLink>
        <NavLink exact to="/games" className="item">
            Games
        </NavLink>
        {isAdmin && (
            <NavLink exact to="/games/new" className="item">
                <i className="icon plus" /> Add New Game
            </NavLink>
        )}
        {isAuthenticated ? (
             <div className="right menu">
                <Link to="#" onClick={logout} className="item">
                    <i className="icon sign-out" /> Logout
                </Link>
            </div>
        ) : (
            <div className="right menu">
                <NavLink to="/login" className="item">
                    <i className="icon sign-in" /> Login
                </NavLink>
                <NavLink to="/signup" className="item">
                    <i className="icon pin" /> Signup
                </NavLink>
            </div>
        )}
    </div>           
);

TopNavigation.protoType = {
    isAuthenticated: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

export default TopNavigation;