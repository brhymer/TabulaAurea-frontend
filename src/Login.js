import React, { Component } from 'react';
import UserModel from './models/User';

class Login extends Component {
    state = {
        email: '',
        password: '',
        errorMessage: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.login(this.state)
        .then(data => {
            if (!data.data) {
                return false
            }
            this.props.storeUser(data.data)
            this.props.history.push('/month')
        })
        .catch((err) => {
            this.setState({
                errorMessage: err.message
            })
        }

    }

    render() {
        return (
            <div className="login">
                <p className="err">{ this.state.errorMessage }</p>
                <br/>
                <h2>Login</h2>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={this.handleChange}
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email} />
                    </div>
                    <br/>
                    <div className="form">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={this.handleChange}
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
