import React from 'react';
import PropTypes from "prop-types";

const TopNavigation = ({showGameForm}) => (
    <div className="ui secondary pointing menu">
        <a href="/" className="item">
            BGShop
        </a>
        <button className="item" onClick={showGameForm}>
            <i className="icon plus" /> Add New Game
        </button>
    </div>           
);

TopNavigation.propTypse = {
    showGameForm: PropTypes.func.isRequired
}

export default TopNavigation;