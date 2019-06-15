import React from 'react';
import PropTypes from "prop-types";

const TopNavigation = ({showGameForm, showLoginForm, showSignupForm}) => (
    <div className="ui secondary pointing menu">
        <a href="/" className="item">
            BGShop
        </a>
        <button className="item" onClick={showGameForm}>
            <i className="icon plus" /> Add New Game
        </button>
        <button className="item" onClick={showLoginForm}>
            <i className="icon plus" /> Login
        </button>
        <button className="item" onClick={showSignupForm}>
            <i className="icon plus" /> Signup
        </button>
    </div>           
);

TopNavigation.propTypse = {
    showGameForm: PropTypes.func.isRequired,
    showLoginForm: PropTypes.func.isRequired,
    showSignupForm: PropTypes.func.isRequired
}

export default TopNavigation;