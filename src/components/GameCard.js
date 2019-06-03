import React from 'react';

const GameCard = () => (
    <div className="ui card">
        <div className="image">
            <span className="ui green ribbon label">$32.99</span>
            <img 
                src="https://cf.geekdo-images.com/imagepagezoom/img/_8vPsfrLL8yO7VzTQA1VkjTfsqM=/fit-in/1200x900/filters:no_upscale()/pic2840020.jpg"
                alt="Game Cover"
            />
        </div>
        <div className="content">
            <a href="#" className="header">
                Quadropolis
            </a>
            <div className="meta">
                <i className="icon users" /> 2-4&nbsp;
                <i className="icon wait" /> 60 min.
            </div>    
        </div>
    </div>
);

export default GameCard;