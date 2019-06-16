import React, { Component } from 'react';
import PropTypes from "prop-types";
import FormInlineMessage from "./FormInlineMessage";

class LoginForm extends Component {
    state = {
        data: {
            email: "",
            password: "" 
        },
        errors: {}
    };

    validate(data) {
        const errors = {};
        if (!data.email) errors.email = "This field can't be blank";
        if (!data.password) errors.password = "This field can't be blank";
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
            data: { ...this.state.data, [e.target.name]: e.target.value }
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