import React, { Component } from 'react';
import PropTypes from "prop-types";
import FormInlineMessage from "./FormInlineMessage";

class SignupForm extends Component {
    state = {
        data: {
            email: "",
            password: "",
            passwordConfirm: "" 
        },
        errors: {}   
    };

    validate(data) {
        const errors = {};
        if (!data.email) errors.email = "This field can't be blank";
        if (!data.password) errors.password = "This field can't be blank";
        if (!data.passwordConfirm) errors.passwordConfirm = "This field can't be blank";
        return errors;
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            console.log(this.state.data);
        } 
    };

    handleStringChange = e => 
        this.setState({ 
            data: {...this.state.data, [e.target.name]: e.target.value }
        });
    
    render() {
        const {data, errors} = this.state;
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className={errors.email ? "field error" : "field"}>
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
                    <FormInlineMessage content={errors.email} type="error" />
                </div>
                <div className={errors.password ? "field error" : "field"}>
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
                    <FormInlineMessage content={errors.password} type="error" />
                </div>
                <div className={errors.passwordConfirm ? "field error" : "field"}>
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
                    <FormInlineMessage content={errors.passwordConfirm} type="error" />
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