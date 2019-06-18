import React from 'react';
import PropTypes from "prop-types";
import AdminRoute from "./AdminRoute";
import _orderBy from 'lodash/orderBy';
import _find from 'lodash/find';
import GameList from './GamesList';
import GameForm from './GameForm';
import api from '../api';


const publishers = [
    {
        _id: "1",
        name: "Days of Wonder"
    },
    {
        _id: "2",
        name: "Rio Grande Games"
    }
];

class GamePage extends React.Component {
    state = {
        games: [],
        loading: true
    };

    componentDidMount() {
        api.games
            .fetchAll()
            .then(games => 
                this.setState({ games: this.sortGames(games), loading: false}));
    }

    sortGames(games) {
        return _orderBy(games, ["featured", "name"], ["desc", "asc"]);
    }

    toggleFeatured = gameId => {
        const game = _find(this.state.games, { _id: gameId });
        return this.updateGame({
            ...game,
            featured: !game.featured
        });
    }

    saveGame = game => 
        (game._id ? this.updateGame(game) : this.addGame(game))
            .then(() => this.props.history.push("/games"));
    

    updateGame = gameData => 
        api.games.update(gameData).then(game =>
            this.setState({
                games: this.sortGames(
                    this.state.games.map(item => item._id === game._id ? game : item)
                ),
                showGameForm: false
            })
        );
    
        
    addGame = gameData => 
        api.games.create(gameData).then(game =>
            this.setState({
                games: this.sortGames([...this.state.games, game]),
                showGameForm: false
            })
        );
      
    
    deleteGame = game => 
        api.games.delete(game).then(() =>
            this.setState({
                games: this.state.games.filter(item => item._id !== game._id)
            })
        );
        

    render() {
        const numberOfColumns = this.props.location.pathname === '/games' 
            ? "sixteen" : "ten";
        return (
            <div className="ui container">
                <div className="ui stackable grid">
                    <AdminRoute 
                        path="/games/new" 
                        user={this.props.user}
                        render={() => (
                            <div className="six wide column">
                                <GameForm 
                                    publishers={publishers} 
                                    submit={this.saveGame}
                                    game={{}}
                                />
                            </div>
                        )}
                    />
                    <AdminRoute 
                        path="/games/edit/:_id" 
                        user={this.props.user}
                        render={(props) => (
                            <div className="six wide column">
                                <GameForm 
                                    publishers={publishers} 
                                    submit={this.saveGame}
                                    game={
                                        _find(this.state.games, {
                                            _id: props.match.params._id
                                        }) || {}
                                    }
                                />
                            </div>
                        )}
                    />
                    <div className={`${numberOfColumns} wide column`}>
                    {
                        this.state.loading ? (
                            <div className="ui icon message">
                                <i className="notched circle loading icon"></i>
                                <div className="content">
                                    <div className="header">Wait a second!</div>
                                    <p>Loading games collection...</p>
                                </div>
                            </div>
                        ) : (
                            <GameList 
                                games={this.state.games}
                                toggleFeatured={this.toggleFeatured}
                                deleteGame={this.deleteGame}
                                user={this.props.user}
                            />
                        )
                    }
                    </div>
                </div>
            </div>
        )
    }
}

GamePage.defaultProps = {
    user: PropTypes.shape({
        token: PropTypes.string,
        role: PropTypes.string.isRequired
    }).isRequired
};
export default GamePage;