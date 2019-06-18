import React, { Component } from 'react';
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import TopNavigation from "./TopNavigation";
import GamePage from "./GamePage";
import ShowGamePage from "./ShowGamePage";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";

class App extends Component {
    state = {
        user: {
            token: null
        }
    };

    logout = () => this.setState({ user: { token: null } });

    render() {
        return (
            <div className="ui container">
                <TopNavigation isAuthenticated={!!this.state.user.token} 
                    logout={this.logout}
                />
                <Route path="/" exact component={HomePage} />
                <Route path="/games" component={GamePage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/game/:_id" exact component={ShowGamePage} />
            </div>
        );
    }
}

export default App;