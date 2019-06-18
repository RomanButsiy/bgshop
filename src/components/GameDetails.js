import React from "react";
import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import Price from './Price';

const GameDetails = ({ game }) => (
    <div>
        <h1 className="ui center aligned dividing header">{game.name}</h1>
        <div className="ui stackable grid">
            <div className="six wide column">
                <div className="ui fluid image">
                    <img src={game.thumbnail} alt="Game cover" />
                </div>
            </div>
            <div className="ten wide column">
                <p>{game.description}</p>
                <table className="ui table">
                    <tbody>
                        <tr>
                            <td>Number of Players:</td>
                            <td>{game.players}</td>
                        </tr>
                        <tr>
                            <td>Duration:</td>
                            <td>{game.duration} minutes</td>
                        </tr>
                        <tr>
                            <td>Price:</td>
                            <td>
                                <Price
                                    className="ui green label"
                                    cents={game.price}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                    <span className="ui">
                        <Link to="#" className="ui green huge button">Add to Cart</Link>
                    </span>    
            </div>
        </div>
    </div>
);

GameDetails.propTypes = {
    game: PropTypes.shape({
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        players: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired
    }).isRequired
};

export default GameDetails;