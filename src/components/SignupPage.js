import React, { Component } from 'react';
import api from '../api';
import SignupForm from "./SignupForm";

class SignupPage extends Component {
    submit = data =>
        api.users.create(data).then(() => this.props.history.push("/login"));

    render() {
        return (
            <div className="ui segment">
                <SignupForm 
                    submit = {this.submit}
                />
            </div>
        );
    }
}

export default SignupPage;