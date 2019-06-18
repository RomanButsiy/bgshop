import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Featured = ({ featured, toggleFeatured, gameId, user }) => (
    <span>
        {
            user.token && user.role === "admin" && (featured ? (
                <Link to="#" onClick={() => toggleFeatured(gameId)} className="ui right yellow corner label">
                    <i className="star icon" />
                </Link>
            ) : (
                <Link to="#"  onClick={() => toggleFeatured(gameId)} className="ui right corner label">
                    <i className="star icon" />
                </Link>
            ))
        }
        {
            (!user.token || (user.token && user.role !== "admin")) && featured && (
                <div className="ui right yellow corner label">
                    <i className="star icon" />
                </div>
            )
        }
    </span>
);
    
Featured.propTypes = {
    featured: PropTypes.bool.isRequired,
    toggleFeatured: PropTypes.func.isRequired,
    gameId: PropTypes.string.isRequired,
    user: PropTypes.shape({
        token: PropTypes.string,
        role: PropTypes.string.isRequired
    }).isRequired
};

export default Featured;