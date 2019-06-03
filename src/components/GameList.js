import React from 'react';
import GameCard from './GameCard';

const GameList = ({games}) => (
    <div className="ui four cards">
       {games.map(game => <GameCard game={game} key={game._id}/>)}
    </div>
);

export default GameList;