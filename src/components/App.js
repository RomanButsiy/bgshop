import React, { Component } from 'react';
import { Route } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import HomePage from "./HomePage";
import TopNavigation from "./TopNavigation";
import GamePage from "./GamePage";
import ShowGamePage from "./ShowGamePage";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";

const setAuthorizationHeader = (token = null) => {
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common.Authorization;
    }
}

class App extends Component {
    state = {
        user: {
            token: null,
            role: "user"
        },
        message: ""
    };

    componentDidMount() {
        if (localStorage.bgshopToken) {
            this.setState({ 
                user: { 
                    token: localStorage.bgshopToken,
                    role: jwtDecode(localStorage.bgshopToken).user.role 
                }
            });
            setAuthorizationHeader(localStorage.bgshopToken);
        }
    }

    setMessage = message => this.setState({ message });

    login = token => {
        this.setState({ 
            user: { 
                token,
                role: jwtDecode(token).user.role 
            } 
        });
        localStorage.bgshopToken = token;
        setAuthorizationHeader(token);
    }

    logout = () => {
        this.setState({ user: { token: null, role: "user" } });
        setAuthorizationHeader();
        localStorage.removeItem("bgshopToken");
    };

    render() {
        return (
            <div className="ui container">
                <TopNavigation 
                    isAuthenticated={!!this.state.user.token} 
                    logout={this.logout}
                    isAdmin={!!this.state.user.token && this.state.user.role === 'admin'}
                />

                {this.state.message && (
                    <div className="ui info message">
                        <i className="close icon" onClick={() => this.setMessage("")} />
                        {this.state.message}
                    </div>
                )}

                <Route path="/" exact component={HomePage} />
                <Route 
                    path="/games"
                    render={props => <GamePage {...props} user={this.state.user}/>} 
                />
                <Route 
                    path="/signup"
                    render={props => (
                        <SignupPage {...props} setMessage={this.setMessage}/>
                    )}
                />
                <Route 
                    path="/login"
                    render={props => (
                        <LoginPage {...props} login={this.login}/>
                    )}
                />
                <Route path="/game/:_id" exact component={ShowGamePage} />
            </div>
        );
    }
}

export default App;