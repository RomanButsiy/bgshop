import React from 'react';
import _orderBy from 'lodash/orderBy';
import GameList from './GamesList';
import GameForm from './GameForm';
import TopNavigation from './TopNavigation';

const publishers = [
    {
        _id: 1,
        name: "Days of Wonder"
    },
    {
        _id: 2,
        name: "Rio Grande Games"
    }
];

const games = [
    {
        _id: 1,
        publisher: 1,
        featured: true,
        name: "Quadropolis",
        thumbnail: "https://cf.geekdo-images.com/imagepagezoom/img/_8vPsfrLL8yO7VzTQA1VkjTfsqM=/fit-in/1200x900/filters:no_upscale()/pic2840020.jpg",
        price: 3299,
        players: "2-4",
        duration: 60
    },
    {
        _id: 2,
        publisher: 1,
        featured: false,
        name: "Five Tribes",
        thumbnail: "https://cf.geekdo-images.com/imagepagezoom/img/duz9VImXFJLPAOeMfyt-pLzV0dM=/fit-in/1200x900/filters:no_upscale()/pic2055255.jpg",
        price: 5100,
        players: "2-4",
        duration: 80
    },
    {
        _id: 3,
        publisher: 2,
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
        games: [],
        showGameForm: false
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

    showGameForm = () => this.setState({ showGameForm: true });
    hideGameForm = () => this.setState({ showGameForm: false });     

    render() {
        const numberOfColumns = this.state.showGameForm ? "ten" : "sixteen";
        return (
            <div className="ui container">
                <TopNavigation showGameForm={this.showGameForm}/>
                <div className="ui stackable grid">
                    {this.state.showGameForm && (
                        <div className="six wide column">
                            <GameForm publishers={publishers} cancel={this.hideGameForm} />
                        </div>
                    )}
                    <div className={`${numberOfColumns} wide column`}>
                    <GameList 
                        games={this.state.games}
                        toggleFeatured={this.toggleFeatured} 
                    />
                    </div>
                </div>
            </div>
        )
    }
}


export default App;