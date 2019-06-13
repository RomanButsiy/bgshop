import React, { Component } from 'react';
import PropTypes from "prop-types";

class GameForm extends Component {
    state = {
        name: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    };

    handleNameChange = e => this.setState({ name: e.target.value })
    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label htmlFor="">
                        Game Title
                    </label>
                    <input 
                    type="text" 
                    id="name" 
                    placeholder="Full game title"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    />
                </div>
                <button className="ui button" type="submit">
                    Create
                </button>
            </form>
        );
    }
}

GameForm.propTypes = {
    
};

export default GameForm;