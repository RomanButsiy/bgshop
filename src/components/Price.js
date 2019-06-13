import React from 'react';
import PropTypes from "prop-types";

const Price = ({ cents }) => (
    <span className="ui green ribbon label">
        {new Intl.NumberFormat('ua-UA', { 
            style: 'currency',
            currency: 'UAH',
            minimumFractionDigits: 2
        }).format(cents/100)}
    </span>            
);

Price.propTypes = {
    cents: PropTypes.number.isRequired
};

export default Price;