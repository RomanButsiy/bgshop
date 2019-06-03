import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import GameCard from './components/GameCard'
import 'semantic-ui-css/semantic.min.css';

const games = [
    {
        name: "Quadropolis",
        thumbnail: "https://cf.geekdo-images.com/imagepagezoom/img/_8vPsfrLL8yO7VzTQA1VkjTfsqM=/fit-in/1200x900/filters:no_upscale()/pic2840020.jpg",
        price: "32.99",
        players: "2-4",
        duration: "60"
    },
    {
        name: "Five Tribes",
        thumbnail: "https://cf.geekdo-images.com/imagepagezoom/img/duz9VImXFJLPAOeMfyt-pLzV0dM=/fit-in/1200x900/filters:no_upscale()/pic2055255.jpg",
        price: "51.00",
        players: "2-4",
        duration: "80"
    },
    {
        name: "Roll for the Galaxy",
        thumbnail: "https://cf.geekdo-images.com/imagepagezoom/img/M6HD1apPIhmhBuvGA8hxPjXGp90=/fit-in/1200x900/filters:no_upscale()/pic1473629.jpg",
        price: "29.99",
        players: "2-5",
        duration: "45"
    }
];


ReactDOM.render(<GameCard game={games[1]}/>, document.getElementById('root'));

serviceWorker.unregister();
