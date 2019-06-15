import React, { Component } from 'react';
import PropTypes from "prop-types";

class LoginForm extends Component {
    state = {
        email: "",
        password: "" 
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    };

    handleStringChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input 
                        type="email" 
                        id="email"
                        name="email" 
                        placeholder="Your Email Address"
                        value={this.state.email}
                        onChange={this.handleStringChange}
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input 
                        type="password" 
                        id="password"
                        name="password" 
                        placeholder="Make it secure"
                        value={this.state.password}
                        onChange={this.handleStringChange}
                    />
                </div>
                <div className="ui fluid buttons">
                    <button className="ui button" type="submit">
                        Login
                    </button>
                    <div className="or"/>
                    <button className="ui button" type="button" onClick={this.props.cancel}>
                        Cancel
                    </button>
                </div>
            </form>
        );
    }    
}

LoginForm.propTypes = {
    cancel: PropTypes.func.isRequired
};

export default LoginForm;