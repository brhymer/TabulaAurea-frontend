import React, { Component } from 'react';
import UserModel from './models/User';

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.login(this.state)
        .then(credentials => {
            // console.log(credentials)  /////////
            if (!credentials.data) {
                return false
            }
            this.props.storeUser(credentials.data)
            this.props.history.push('/profile')
        })
        .catch(err => console.log(err))

    }

    render() {
        return (
            <div className="login">
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
