import React from 'react';
import PropTypes from "prop-types";
import GameCard from './GameCard';


const GamesList = ({games, toggleFeatured, deleteGame}) => (
    <div className="ui four cards">
        {
            games.length === 0 ? (
                <div className="ui icon message">
                    <i className="icon info"></i>
                    <div className="content">
                        <div className="header">There are no game in your store!</div>
                        <p>You should add some, don't you think?</p>
                    </div>
                </div>
            ) : (
                games.map(game => 
                    <GameCard 
                        game={game} 
                        key={game._id} 
                        toggleFeatured={toggleFeatured}
                        deleteGame={deleteGame}
                    />
                )
            )
        }
    </div>
);

GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleFeatured: PropTypes.func.isRequired,
    deleteGame: PropTypes.func.isRequired
};

GamesList.defaultProps = {
    games: []
}

export default GamesList;