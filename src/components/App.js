import React from 'react';
import _orderBy from 'lodash/orderBy';
import GameList from './GamesList';

const games = [
    {
        _id: 1,
        featured: true,
        name: "Quadropolis",
        thumbnail: "https://cf.geekdo-images.com/imagepagezoom/img/_8vPsfrLL8yO7VzTQA1VkjTfsqM=/fit-in/1200x900/filters:no_upscale()/pic2840020.jpg",
        price: 3299,
        players: "2-4",
        duration: 60
    },
    {
        _id: 2,
        featured: false,
        name: "Five Tribes",
        thumbnail: "https://cf.geekdo-images.com/imagepagezoom/img/duz9VImXFJLPAOeMfyt-pLzV0dM=/fit-in/1200x900/filters:no_upscale()/pic2055255.jpg",
        price: 5100,
        players: "2-4",
        duration: 80
    },
    {
        _id: 3,
        featured: false,
        name: "Roll for the Galaxy",
        thumbnail: "https://cf.geekdo-images.com/imagepagezoom/img/M6HD1apPIhmhBuvGA8hxPjXGp90=/fit-in/1200x900/filters:no_upscale()/pic1473629.jpg",
        price: 2999,
        players: "2-5",
        duration: 45
    }
];

class App extends React.Component {
    state = {
        games: []
    };

    componentDidMount() {
        this.setState({ games: this.sortGames(games)});
    }

    sortGames(games) {
        return _orderBy(games, ["featured", "name"], ["desc", "asc"]);
    }

    toggleFeatured = gameId => 
        this.setState({
            games: this.sortGames(
                this.state.games.map(
                    game =>
                        gameId === game._id ? {...game, featured: !game.featured } : game
                )
            )
        });

    render() {
        return (
            <div className="ui container">
            <GameList 
                games={this.state.games}
                toggleFeatured={this.toggleFeatured} 
            />
            </div>
        )
    }
}


export default App;