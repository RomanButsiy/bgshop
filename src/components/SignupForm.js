import React, { Component } from 'react';
import PropTypes from "prop-types";

class SignupForm extends Component {
    state = {
        data: {
            email: "",
            password: "",
            passwordConfirm: "" 
        },
        errors: {}   
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.data)
    };

    handleStringChange = e => 
        this.setState({ 
            data: {...this.state.data, [e.target.name]: e.target.value }
        });
    
    render() {
        const {data} = this.state;
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
                        value={data.email}
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
                        value={data.password}
                        onChange={this.handleStringChange}
                    />
                </div>
                <div className="field">
                    <label htmlFor="passwordConfirm">
                        Confirm Password
                    </label>
                    <input 
                        type="password" 
                        id="passwordConfirm"
                        name="passwordConfirm" 
                        placeholder="Make it secure"
                        value={data.passwordConfirm}
                        onChange={this.handleStringChange}
                    />
                </div>
                <div className="ui fluid buttons">
                    <button className="ui button" type="submit">
                        Sign Up
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

SignupForm.propTypes = {
    cancel: PropTypes.func.isRequired
};

export default SignupForm;