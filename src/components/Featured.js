import React from 'react';
import PropTypes from "prop-types";

const Featured = ({ featured }) => (
    <span>
        {featured ? (
            <a href="#section" className="ui right yellow corner label">
            <i className="star icon" />
            </a>
        ) : (
            <a href="#section" className="ui right corner label">
            <i className="star icon" />
            </a>
        )}
    </span>
);
    
Featured.propTypes = {
    featured: PropTypes.bool.isRequired
};

export default Featured;