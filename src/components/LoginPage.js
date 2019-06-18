import React, { Component } from 'react';
import LoginForm from "./LoginForm";
import api from '../api';

class LoginPage extends Component {
    submit = data =>
        api.users.create(data).then(() => this.props.history.push("/login"));

    render() {
        return (
            <div className="ui segment">
                <LoginForm 
                     submit = {this.submit}
                />
            </div>
        );
    }
}

export default LoginPage;