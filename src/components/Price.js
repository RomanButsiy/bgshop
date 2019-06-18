import React from 'react';
import PropTypes from "prop-types";

const Price = ({ cents,  className}) => (
    <span className={className}>
        {new Intl.NumberFormat('ua-UA', { 
            style: 'currency',
            currency: 'UAH',
            minimumFractionDigits: 2
        }).format(cents/100)}
    </span>            
);

Price.propTypes = {
    cents: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired
};

export default Price;